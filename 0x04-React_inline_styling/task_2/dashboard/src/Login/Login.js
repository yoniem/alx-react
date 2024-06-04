import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      display: 'block',
    }
  },
  inputGroup: {
    margin: '10px 0',
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    }
  },
  input: {
    margin: '0 5px',
    '@media (max-width: 900px)': {
      width: 'calc(100% - 10px)',
      margin: '5px 0',
    }
  },
  button: {
    margin: '10px 0',
    '@media (max-width: 900px)': {
      width: '100%',
    }
  }
});

const Login = () => {
  return (
    <div className={css(styles.container)}>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
};

export default Login;
