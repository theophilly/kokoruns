import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// assets
import { FiFacebook, FiLinkedin, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

const socials = [
    <FiFacebook color="#0991FF" />,
    <FiLinkedin color="#0991FF" />,
    <FiInstagram color="#0991FF" />,
    <FiTwitter color="#0991FF" />,
    <FiYoutube color="#0991FF" />
];
const footerData = ['About Us', 'Contact Us', 'Our Community Guidelines', 'Terms of Use', 'Terms of Service', 'Privacy Policy', 'FAQs'];

// styles
const useStyles = makeStyles((theme) => ({
    root: {
        height: 'auto',
        background: theme.palette.background1,

        padding: ' 50px calc((100vw - 1300px) / 2)',

        '@media (max-width: 1300px)': {
            padding: '50px 20px 25px'
        }
    },
    upper: {
        display: 'flex',
        '@media (max-width: 704px)': {
            flexDirection: 'column'
        }
    },
    footer_logo: {
        height: '40px',
        width: '180px',
        '@media (max-width: 600px)': {
            height: '30px',
            width: '130px'
        }
    },
    links_box: {
        display: 'flex',
        paddingLeft: '30px',

        flex: 1,

        flexWrap: 'wrap',
        marginTop: '-15px',
        '@media (max-width: 1075px)': {
            paddingLeft: '10px'
        },
        '@media (max-width: 940px)': {
            paddingLeft: '10px',
            paddingright: '10px'
        },
        '@media (max-width: 704px)': {
            paddingLeft: '0px',
            marginTop: '15px',
            marginBottom: '25px'
        }
    },
    links: {
        ...theme.typography.subtitle1,
        marginTop: '15px',
        minWidth: '200px',
        color: 'inherit',
        textDecoration: 'none',

        '@media (max-width: 940px)': {
            minWidth: 'max-content',
            marginLeft: '15px'
        },
        '@media (max-width: 704px)': {
            width: '100%',
            marginLeft: '0px'
        }
    },
    social_box: {
        width: '300px',
        height: '100px',
        '@media (max-width: 704px)': {
            width: '100%'
        }
    },
    socials_heading: {
        ...theme.typography.subtitle1,
        textAlign: 'end',
        '@media (max-width: 704px)': {
            textAlign: 'center'
        }
    },
    social_icons: {
        ...theme.typography.flex,
        justifyContent: 'space-between',
        marginTop: '20px',
        '@media (max-width: 704px)': {
            justifyContent: 'space-evenly'
        }

        //  cursor: 'pointer'
    },

    horizontal_r: {
        height: '1px',
        background: 'black',
        border: 'none',
        marginTop: '25px',
        '@media (max-width: 704px)': {
            marginTop: '10px'
        }
    }
}));

export default function Footer() {
    const {
        root,
        upper,
        footer_logo,
        links_box,
        links,
        social_box,
        socials_heading,
        social_icons,

        horizontal_r
    } = useStyles();
    return (
        <Box className={root}>
            <Box className={upper}>
                <img alt="kokoruns_logo" className={footer_logo} src="logo.png" />
                <Box className={links_box}>
                    {footerData.map((item) => (
                        <Typography component={Link} to="/" className={links}>
                            {item}
                        </Typography>
                    ))}
                </Box>
                <Box className={social_box}>
                    <Typography className={socials_heading}>Follow Kokoruns</Typography>
                    <Box className={social_icons}>{socials.map((item) => item)}</Box>
                </Box>
            </Box>
            {/* lower */}
            <Box>
                <hr className={horizontal_r}></hr>
                <Typography style={{ textAlign: 'center', marginTop: '15px' }}>&copy; 2021. Kokoruns. All Right Reserved.</Typography>
            </Box>
        </Box>
    );
}
