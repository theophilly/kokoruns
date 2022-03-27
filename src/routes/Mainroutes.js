import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Privacypolicy from '../pages/Privacypolicy';
import Profilesetup from '../pages/Profilesetup';
import Profilesetupsuccess from '../pages/Profilesetupsuccess';
import MinimalLayout from '../layout/MinimalLayout';
import Contactus from '../pages/Contactus';

const Mainroutes = (authenticated, active, token) => {
    return {
        path: '/',
        element: <MinimalLayout />,
        children: [
            {
                path: '/',
                element: authenticated ? <Navigate to="/profile" /> : <Home />
            },
            {
                path: '/homepage',
                element: <Home />
            },
            {
                path: '/login',
                element: authenticated ? <Navigate to="/profile" /> : <Login />
            },
            {
                path: '/register',
                element: authenticated ? <Navigate to="/profile" /> : <Signup />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/privacy',
                element: <Privacypolicy />
            },
            {
                path: '/profile-setup',
                element: token ? active ? <Navigate to="/profile" /> : <Profilesetup /> : <Navigate to="/login" />
            },
            {
                path: '/update-profile',
                element: token && active ? <Profilesetup /> : <Navigate to="/login" />
            },
            {
                path: '/profilesuccess',
                element: <Profilesetupsuccess />
            },
            {
                path: '/contact-us',
                element: <Contactus />
            }
        ]
    };
};

export default Mainroutes;
