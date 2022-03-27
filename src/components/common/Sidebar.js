import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, Button, List, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';

//icons
import { BiHomeCircle } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { GrContact } from 'react-icons/gr';

// links for the side nav
const links = [
    {
        id: 'L0',
        path: '/about',
        icon: <BiHomeCircle />,
        title: 'About Us'
    },
    { id: 'L1', path: '/contact-us', icon: <GrContact />, title: 'Contact Us' },
    { id: 'L1', path: '/', icon: <IoFastFood />, title: 'Help' }
];

// style const
const useStyles = makeStyles((theme) => ({
    label: {
        marginRight: '20px'
    },
    selected: {
        color: '#1275D1 !important',
        background: '#E2ECF6 !important',
        '& :hover': {
            color: 'inherit',
            background: '#E2ECF6'
        }
    },
    drawerheading: {
        fontWeight: '600',
        fontSize: '1.6rem',
        fontFamily: 'mulish',
        color: '#1275D1'
    },
    button: {
        borderRadius: '0',
        padding: '13px 8px 13px 20px',
        display: 'flex',
        justifyContent: 'flex-start',
        textTransform: 'capitalize',
        background: 'transparent',
        fontWeight: '600',
        fontSize: '.93rem',
        color: 'rgb(99, 115, 129)',
        alignItems: 'left',
        width: '280px',
        borderBottom: '1px solid #CCCCCC',

        '&:hover': {
            color: '#1275D1',
            background: '#E2ECF6'
        }
    },
    usersection: {
        background: 'rgb(223, 223, 223)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        width: '90%',
        height: '60px',
        margin: '0 auto',
        borderRadius: '15px',
        marginTop: '15px',

        '& h2': {
            marginLeft: '10px',
            fontSize: '1rem'
        }
    }
}));

const ListStyle = styled(List)(({ theme }) => ({
    //  marginTop: theme.spacing(2)
}));

export default function Sidedrawer(props) {
    const { label, drawerheading, button, usersection, selected } = useStyles();
    const auth = useSelector((state) => state.authReducer);

    const userData = () => {
        return (
            <Box className={usersection}>
                <Avatar sx={{ width: 60, height: 60 }} alt="John Doe">
                    <AiOutlineUser />
                </Avatar>
                <Typography component="h2">{auth.authenticated ? auth.user.firstName : 'John Doe'}</Typography>
            </Box>
        );
    };
    return (
        <>
            {/* List of links */}
            <ListStyle>
                {links.map((link, index) => (
                    <Button
                        key={index}
                        classes={{ startIcon: label }}
                        end="true"
                        disableElevation
                        className={button}
                        variant="contained"
                        autoCapitalize="none"
                        startIcon={link.icon}
                        component={NavLink}
                        to={link.path}
                        onClick={props.onClose}
                    >
                        {link.title}
                    </Button>
                ))}
            </ListStyle>
        </>
    );
}
