import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '1px solid #ccc',
    padding: '10px',
    position: 'fixed',
    top: '20px',
    right: '20px',
    width: '300px',
  },
});

function Notifications({ displayDrawer }) {
  return (
    <div className={css(styles.notifications)}>
      {displayDrawer ? (
        <div>
          <p>Here is the list of notifications</p>
          {/* List of notifications */}
        </div>
      ) : (
        <p>Your notifications</p>
      )}
    </div>
  );
}

export default Notifications;
