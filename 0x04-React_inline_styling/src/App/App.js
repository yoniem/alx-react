import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  body: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    margin: '0',
    padding: '0',
  },
  footer: {
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '60px',
    width: '100%',
  },
});

function App() {
  return (
    <div className={css(styles.body)}>
      {/* Content */}
      <footer className={css(styles.footer)}>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
