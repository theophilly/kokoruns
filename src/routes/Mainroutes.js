import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Homepage';
import Login from '../pages/Login';

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
];

export default AuthenticationRoutes;
