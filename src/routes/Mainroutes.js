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

const Mainroutes = (authenticated, active, token) => {
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
<<<<<<< HEAD
                path: '/update-profile',
                element: token && active ? <Profilesetup /> : <Navigate to="/login" />
            },
            {
=======
>>>>>>> 1ae6ba18804ecdfae7a7a41fa63ef3aebcd1d0b3
                path: '/profilesuccess',
                element: <Profilesetupsuccess />
            }
        ]
    };
};

export default Mainroutes;
