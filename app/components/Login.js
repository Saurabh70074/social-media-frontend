'use client';

import { useState } from 'react';
import { loginUser } from '../../services/api';
import styles from '../styles/login.module.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      localStorage.setItem('token', response.data.token);
      onLogin();
    } catch (error) {
      alert('Login failed: ' + error.response.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
