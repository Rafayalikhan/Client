// src/components/Login.jsx
import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../app/redux/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

    const user = useSelector((state) => state.auth);
  const navigate = useNavigate();


  useEffect(() => {

    if (authStatus === 'succeeded' && user.token) {
      localStorage.setItem('token', user.token);
      navigate('/dashboard');
    }
  }, [authStatus, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ username, password }));
    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      {authStatus === 'loading' && <p>Loading...</p>}
    </div>
  );
};

export default Login;
