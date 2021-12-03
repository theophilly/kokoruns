import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import About from '../pages/About';
import Privacypolicy from '../pages/Privacypolicy';

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Signup />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/privacy',
    element: <Privacypolicy />,
  },
];

export default AuthenticationRoutes;
