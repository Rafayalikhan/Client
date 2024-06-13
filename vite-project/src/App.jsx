// src/App.js
import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { selectAuth } from './app/redux/authSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute';
// import Routes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {


  function PrivateRoute({ element })  {
    const user = useSelector((state) => state.auth);

    console.log("User in PrivateRoute: ", user);
  
    if (!user.token) {
      console.log("User is not authenticated, redirecting to login");
      return <Navigate to="/login" />;
    }
  
    return element;
  };




  return (
    <div>
        <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>

    </div>
  );
};

export default App;
