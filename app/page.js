'use client';

import { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import Feed from './components/Feed';
import styles from './styles/Home.module.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(true); // State to toggle between Register and Login

  return (
    <div className={styles.container}>
      {!isLoggedIn ? (
        <div className={styles.formContainer}>
          {showRegister ? (
            <>
              <Register />
              <p className={styles.toggleText}>
                Already have an account?{' '}
                <button className={styles.toggleButton} onClick={() => setShowRegister(false)}>Login</button>
              </p>
            </>
          ) : (
            <>
              <Login onLogin={() => setIsLoggedIn(true)} />
              <p className={styles.toggleText}>
                Don't have an account?{' '}
                <button className={styles.toggleButton} onClick={() => setShowRegister(true)}>Register</button>
              </p>
            </>
          )}
        </div>
      ) : (
        <Feed />
      )}
    </div>
  );
}
