// src/components/Signup.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../app/redux/authSlice';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ username, password, role }));
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Signup</button>
      </form>
      {authStatus === 'loading' && <p>Loading...</p>}
    </div>
  );
};

export default Signup;
