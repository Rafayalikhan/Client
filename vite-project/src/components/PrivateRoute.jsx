// src/components/PrivateRoute.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import selectAuth  from '../app/redux/authSlice';

const PrivateRoute = ({ children }) => {
  const auth = useSelector(selectAuth);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
