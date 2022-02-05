import React from 'react';

// material-ui
import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

// project imports
import SignUpForm from '../components/auth/SignUpForm';

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
        height: '100vh',
        alignItems: 'center',
        display: 'flex',
        padding: ' 15px calc((100vw - 1200px) / 2) !important',
        gap: '20px',
        // background: theme.palette.background1,
        background: '#faf9f9',
        '@media (max-width: 1200px)': {
            padding: '15px'
        },
        '@media (max-width: 1000px)': {
            flexDirection: 'column-reverse',
            height: 'auto',
            padding: '15px 15px 40px'
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
        //   border: '1px solid red',
        '@media (max-width: 670px)': {
            width: '100%',
            padding: '0px 20px 30px'
        }
    }
}));

export default function Signup() {
    const { root, right, content, list_item } = useStyles();
    const theme = useTheme();
    return (
        <Box className={root}>
            {/* left */}
            <Box
                sx={{
                    width: '50%',
                    height: '90%',

                    position: 'relative',
                    background: "url('register.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '850px',
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
                        //  background-image: linear-gradient(120deg, #eaee44, #33d0ff),
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
                }}
            >
                {/* content */}
                <Box className={content}>
                    {data.map((item) => (
                        <Typography className={list_item}>{item}</Typography>
                    ))}
                </Box>
            </Box>
            {/* right */}
            <Box className={right}>
                <SignUpForm />
            </Box>
        </Box>
    );
}
