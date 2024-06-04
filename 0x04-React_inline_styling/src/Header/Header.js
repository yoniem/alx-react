import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
  },
  logo: {
    width: '200px',
  },
  title: {
    fontSize: '24px',
  },
});

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src="logo.png" alt="logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School Dashboard</h1>
    </div>
  );
}

export default Header;
