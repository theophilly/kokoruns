import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Homepage';

const AuthenticationRoutes = (isLoggedIn) => [
  {
    path: '/',
    element: <Home />,
  },
];

export default AuthenticationRoutes;
