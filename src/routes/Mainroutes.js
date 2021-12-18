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

const Mainroutes = (isLoggedIn) => {
    return {
        path: '/',
        element: <MinimalLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Signup />
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
                element: <Profilesetup />
            },
            {
                path: '/profilesuccess',
                element: <Profilesetupsuccess />
            }
        ]
    };
};

export default Mainroutes;
