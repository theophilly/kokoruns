import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

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
];

export default AuthenticationRoutes;
