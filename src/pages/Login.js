import React from 'react';

// material-ui
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

// project imports
import SignInForm from '../components/auth/SignInForm';

// assets
const data = [
    ' Kokoruns enables you to',
    '- Showcase Your Portfolio',
    '- Connect With Employers',
    '- Brand & Showcase Your Company/School/Association',
    '- Find Other Users',
    '- Broadcast Your Events',
    '- Join Teams'
];

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        height: '90.3vh',
        alignItems: 'center',
        display: 'flex',
        padding: ' 15px calc((100vw - 1200px) / 2) !important',
        gap: '20px',
        background: '#faf9f9',
        // background: theme.palette.background1,

        '@media (max-width: 1200px)': {
            padding: '15px'
        },
        '@media (max-width: 1000px)': {
            flexDirection: 'column-reverse',
            height: 'auto',
            padding: '15px 15px 40px'
        }
    },
    left: {
        width: '50%',
        height: '90%',

        position: 'relative',
        background: "url('login.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '700px',
        backgroundPosition: 'center center',
        padding: '60px 40px',
        color: 'white',
        '&::before': {
            content: '""', // ::before and ::after both require content
            position: 'absolute',
            display: 'block',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: theme.palette.primary.main,

            opacity: 0.7,
            zIndex: 1,
            mixBlendMode: 'multiply'
        },
        '@media (max-width: 670px)': {
            width: '100%'
        },
        '@media (max-width: 400px)': {
            padding: '60px 15px'
        }
    },
    content: {
        position: 'relative',
        zIndex: 2
    },
    list_item: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '20px',
        fontFamily: 'mulish'
    },
    right: {
        width: '50%',
        height: '90%',
        padding: '0 20px',

        '@media (max-width: 670px)': {
            width: '100%',
            padding: '0px 20px 30px'
        }
    },
    heading: {
        ...theme.typography.title2
    }
}));

export default function Login() {
    const { root, left, right, content, list_item } = useStyles();
    return (
        <Box className={root}>
            {/* left */}
            <Box className={left}>
                {/* content */}
                <Box className={content}>
                    {data.map((item) => (
                        <Typography className={list_item}>{item}</Typography>
                    ))}
                </Box>
            </Box>
            {/* right */}
            <Box className={right}>
                <SignInForm />
            </Box>
        </Box>
    );
}
