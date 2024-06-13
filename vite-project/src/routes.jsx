// src/routes.js
import React from 'react';
import { BrowserRouter as Routes, Route,  } from 'react-router-dom';
import Signup from './components/Signup'
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';

const Routes = () => {
  return (
    <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />

  </Routes>
  );
};

export default Routes;
