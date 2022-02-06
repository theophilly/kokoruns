import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button, IconButton, Drawer, Link, Box, useTheme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import LogoSection from '../../layout/MainLayout/LogoSection';

// import Notification from '../layout/MainLayout/Header/NotificationSection.js';
// import Profile from '../layout/MainLayout/Header/ProfileSection.js';
// import Sidedrawer from './Sidedrawer.js';
// import CartSection from '../layout/MainLayout/Header/CartSection.js';

const headersData = () => [
    {
        label: 'About us',
        href: '/about'
    },
    {
        label: 'Contact Us',
        href: '/'
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
    }
];

const useStyles = makeStyles((theme) => ({
    header: (props) => {
        console.log(props.theme.palette);
        return {
            background: '#faf9f9 !important',
            position: 'static',
            top: 0,
            left: 0,
            padding: ' 15px calc((100vw - 1300px) / 2) !important',
            '@media (max-width: 900px)': {
                paddingLeft: 0
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
        width: '280px'
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
    loginButton: {
        fontWeight: 'bold',
        marginLeft: '20px',
        borderRadius: '5px',
        padding: '6px 60px',
        backgroundColor: 'white',
        textTransform: 'capitalize',
        border: '1px solid #0991FF'
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
    }
}));

export default function Navbar() {
    const theme = useTheme();
    const { authenticated, active, token } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();

    const { header, logo, menuButton, toolbar, drawerContainer, signupButton, loginButton, signOutButton } = useStyles({ theme });

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
                                    <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                                        <LogoSection />
                                    </Box>
                                </Box>
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

                {/* <Box>
          <Profile />
          <CartSection />
       {auth.authenticated && <Notification />} 
        </Box> */}
            </Toolbar>
        );
    };

    const femmecubatorLogo = (
        <Link
            {...{
                component: RouterLink,
                to: '/',
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
            } else if (['Sign Out'].includes(label)) {
                return (
                    <Button
                        onClick={logoutHandler}
                        style={{ display: !token && 'none' }}
                        key={index}
                        {...{
                            key: label,
                            color: 'primary',
                            disableElevation: true,
                            variant: variant,
                            className: `${menuButton} ${signOutButton}`
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
