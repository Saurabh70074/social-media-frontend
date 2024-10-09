'use client';

import { useState } from 'react';
import { registerUser } from '../../services/api';
import styles from '../styles/register.module.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await registerUser({ username, email, password });
      alert('Registration successful!');
    } catch (error) {
      setError('Registration failed: ' + error.response.data.error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
