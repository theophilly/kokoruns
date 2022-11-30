import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, IconButton, Drawer, Link, Box, useTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import LogoSection from '../../layout/MainLayout/LogoSection';
import Sidedrawer from './Sidebar';
import { FaTimes } from 'react-icons/fa';

const headersData = () => [
    {
        label: 'About us',
        href: '/about'
    },
    {
        label: 'Contact Us',
        href: '/contact-us'
    },
    {
        label: 'Help',
        href: '/'
    },
    {
        label: 'Sign In',
        href: '/login',
        class: 'loginButton',
        variant: 'outlined'
    },
    {
        label: 'Register',
        href: '/register',
        class: 'signupButton',
        variant: 'contained'
    },
    {
        label: 'Sign Out',
        variant: 'outlined'
    },
    {
        label: 'Dashboard',
        variant: 'outlined',
        href: '/profile'
    }
];

const useStyles = makeStyles((theme) => ({
    header: (props) => {
        return {
            background: '#faf9f9 !important',
            position: 'static',
            top: 0,
            left: 0,
            padding: ' 15px calc((100vw - 1300px) / 2) !important',
            '@media (max-width: 900px)': {
                paddingLeft: 0
            },
            '@media (max-width: 1100px)': {
                paddingLeft: 0,
                padding: ' 15px calc((100vw - 1300px) / 2) 5px !important'
            }
        };
    },
    logo: {
        height: '40px',
        width: '180px',
        '@media (max-width: 600px)': {
            height: '30px',
            width: '130px'
        }
    },
    menuButton: {
        fontWeight: '600',
        size: '18px',
        marginLeft: '30px',
        textTransform: 'capitalize',
        '&:hover': {
            background: 'transparent'
        }
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'black'
    },
    drawerContainer: {
        padding: '5px 0px',
        width: '280px',
        margin: '0 5px'
    },

    signupButton: {
        borderRadius: '5px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        padding: '6px 60px',
        '&:hover': {
            background: 'rgb(6, 101, 178)'
        }
    },
    signupButtonSide: {
        fontWeight: 'bold',
        marginLeft: '10px',
        width: '250px',
        borderRadius: '5px',
        padding: '6px 80px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        color: 'rgb(217, 38, 39)',
        border: '1px solid rgb(217, 38, 39)'
    },
    signupButton2: {
        borderRadius: '5px',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        padding: '6px 60px',
        width: '100%',
        marginLeft: '0px',
        marginTop: '20px',
        '&:hover': {
            background: 'rgb(6, 101, 178)'
        }
    },
    loginButton: {
        fontWeight: 'bold',
        marginLeft: '20px',
        borderRadius: '5px',
        padding: '6px 60px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        border: '1px solid #0991FF'
    },
    loginButtonSide: {
        fontWeight: 'bold',
        marginLeft: '10px',
        borderRadius: '5px',
        width: '250px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        border: '1px solid #0991FF'
    },
    loginButton2: {
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '6px 60px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        border: '1px solid #0991FF',
        width: '100%',
        marginLeft: '0px',
        marginTop: '35px'
    },
    signOutButton: {
        fontWeight: 'bold',
        marginLeft: '20px',
        borderRadius: '5px',
        padding: '6px 60px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        color: 'rgb(217, 38, 39)',
        border: '1px solid rgb(217, 38, 39)',
        '&:hover': {
            border: '1px solid rgb(217, 38, 39)'
        }
    },
    signOutButton2: {
        fontWeight: 'bold',
        borderRadius: '5px',
        padding: '6px 60px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        color: 'rgb(217, 38, 39)',
        border: '1px solid rgb(217, 38, 39)',
        width: '100%',
        marginLeft: '0px',
        marginTop: '35px',
        '&:hover': {
            border: '1px solid rgb(217, 38, 39)'
        }
    }
}));

export default function Navbar() {
    const theme = useTheme();
    const { authenticated, token } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const {
        header,
        logo,
        menuButton,
        toolbar,
        drawerContainer,
        signupButton,
        loginButton,
        signOutButton,
        signupButton2,
        loginButton2,
        signOutButton2,
        signupButtonSide,
        loginButtonSide
    } = useStyles({ theme });

    const [state, setState] = useState({
        mobileView: true,
        drawerOpen: false
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1100
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());

        return () => {
            window.removeEventListener('resize', () => setResponsiveness());
        };
    }, []);

    const logoutHandler = (id) => {
        dispatch({ type: 'SIGN_OUT' });
    };

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {femmecubatorLogo}
                <Box>{getMenuButtons()}</Box>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    //  border: '1px solid red',
                    width: '100vw',
                    marginRight: 0,
                    marginTop: '-15px'
                }}
            >
                <Box
                    justifyContent="space-between"
                    display="flex"
                    alignItems="center"
                    width="100%"
                    height="10vh"
                    //  border="1px solid red"
                >
                    <div>{femmecubatorLogo}</div>
                    <Drawer
                        {...{
                            anchor: 'left',
                            open: drawerOpen,
                            onClose: handleDrawerClose
                        }}
                    >
                        <div className={drawerContainer}>
                            {/* <Sidedrawer onClose={handleDrawerClose} /> */}

                            <>
                                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            p: 2,
                                            mx: 'auto',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <LogoSection />
                                        <IconButton onClick={handleDrawerClose} sx={{ fontSize: '1rem' }} aria-label="Example">
                                            <FaTimes />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <Sidedrawer onClose={handleDrawerClose} />
                                {[
                                    {
                                        label: 'Sign In',
                                        href: '/login',
                                        class: 'loginButton',
                                        variant: 'outlined'
                                    },
                                    {
                                        label: 'Register',
                                        href: '/register',
                                        class: 'signupButton',
                                        variant: 'contained'
                                    },
                                    {
                                        label: 'Dashboard',
                                        variant: 'outlined',
                                        href: '/profile'
                                    },
                                    {
                                        label: 'Sign Out',
                                        variant: 'outlined'
                                    }
                                ].map(({ label, href, variant }, index) => {
                                    if (['Register', 'Sign In'].includes(label)) {
                                        return (
                                            <Button
                                                key={index}
                                                onClick={handleDrawerClose}
                                                style={{ display: token && 'none' }}
                                                {...{
                                                    key: label,
                                                    color: 'primary',
                                                    disableElevation: true,
                                                    variant: variant,
                                                    to: href,
                                                    component: RouterLink,
                                                    className: `${menuButton} ${label === 'Register' ? signupButton2 : ''} ${
                                                        label === 'Sign In' ? loginButton2 : ''
                                                    }`
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    } else if (['Sign Out', 'Dashboard'].includes(label)) {
                                        return (
                                            <Button
                                                onClick={
                                                    !href
                                                        ? () => {
                                                              handleDrawerClose();
                                                              logoutHandler();
                                                          }
                                                        : null
                                                }
                                                style={{ display: !token && 'none', marginTop: '10px' }}
                                                key={index}
                                                {...{
                                                    key: label,
                                                    color: 'primary',
                                                    to: href ? href : '/',
                                                    component: RouterLink,
                                                    disableElevation: true,
                                                    variant: variant,
                                                    className: `${label === 'Sign Out' ? signupButtonSide : ''} ${
                                                        label === 'Dashboard' ? loginButtonSide : ''
                                                    }`
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    } else {
                                        return (
                                            <Button
                                                key={index}
                                                {...{
                                                    key: label,
                                                    color: 'inherit',
                                                    to: href,
                                                    component: RouterLink,
                                                    className: menuButton
                                                }}
                                            >
                                                {label}
                                            </Button>
                                        );
                                    }
                                })}
                            </>
                        </div>
                    </Drawer>

                    <IconButton
                        style={{ color: 'black' }}
                        {...{
                            edge: 'start',
                            color: 'inherit',
                            'aria-label': 'menu',
                            'aria-haspopup': 'true',
                            onClick: handleDrawerOpen
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        );
    };

    const femmecubatorLogo = (
        <Link
            {...{
                component: RouterLink,
                to: authenticated ? '/homepage' : '/',
                color: 'inherit',
                style: { textDecoration: 'none' }
            }}
            className={logo}
        >
            <img alt="kokoruns_logo" className={logo} src="logo.png" />
        </Link>
    );

    const getMenuButtons = () => {
        return headersData().map(({ label, href, variant }, index) => {
            if (['Register', 'Sign In'].includes(label)) {
                return (
                    <Button
                        key={index}
                        style={{ display: token && 'none' }}
                        {...{
                            key: label,
                            color: 'primary',
                            disableElevation: true,
                            variant: variant,
                            to: href,
                            component: RouterLink,
                            className: `${menuButton} ${label === 'Register' ? signupButton : ''} ${label === 'Sign In' ? loginButton : ''}`
                        }}
                    >
                        {label}
                    </Button>
                );
            } else if (['Sign Out', 'Dashboard'].includes(label, href)) {
                return (
                    <Button
                        onClick={!href ? logoutHandler : null}
                        style={{ display: !token && 'none' }}
                        key={index}
                        {...{
                            key: label,
                            color: 'primary',
                            to: href ? href : '/',
                            component: RouterLink,
                            disableElevation: true,
                            variant: variant,
                            className: `${menuButton} ${label === 'Sign Out' ? signOutButton : ''} ${
                                label === 'Dashboard' ? loginButton : ''
                            }`
                        }}
                    >
                        {label}
                    </Button>
                );
            } else {
                return (
                    <Button
                        key={index}
                        {...{
                            key: label,
                            color: 'inherit',
                            to: href,
                            component: RouterLink,
                            className: menuButton
                        }}
                    >
                        {label}
                    </Button>
                );
            }
        });
    };

    return (
        <header>
            <AppBar elevation={0} className={header}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
