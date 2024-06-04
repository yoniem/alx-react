import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  marginBottom: {
    marginBottom: '20px',
  },
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <h2>Login</h2>
      <label htmlFor="email" className={css(styles.marginBottom)}>Email:</label>
      <input type="email" id="email" className={css(styles.marginBottom)} />
      <label htmlFor="password" className={css(styles.marginBottom)}>Password:</label>
      <input type="password" id="password" className={css(styles.marginBottom)} />
      <button>OK</button>
    </div>
  );
}

export default Login;
