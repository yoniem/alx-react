import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  menuItem: {
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    ':hover': {
      animationName: [bounce, fade],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 3',
    }
  },
  notificationPanel: {
    position: 'absolute',
    top: '40px',
    right: '0',
    width: '300px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    fontSize: '20px',
    '@media (max-width: 900px)': {
      width: '100%',
      height: '100%',
      top: '0',
      right: '0',
      padding: '0',
    }
  },
  ul: {
    padding: '0',
    listStyleType: 'none',
    margin: '0',
    '@media (max-width: 900px)': {
      padding: '0',
    }
  },
});

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const fade = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
};

const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNotifications = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css(styles.container)}>
      <div className={css(styles.menuItem)} onClick={toggleNotifications}>
        Notifications
      </div>
      {isOpen && (
        <div className={css(styles.notificationPanel)}>
          <ul className={css(styles.ul)}>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" value="Server down" />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Notifications;
