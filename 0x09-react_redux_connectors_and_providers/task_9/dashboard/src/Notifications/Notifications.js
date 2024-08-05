import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ unreadNotifications, displayDrawer, onMarkAsRead, setNotificationFilter }) {
  return (
    <div>
      <h2>Here is the list of notifications:</h2>
      <ul>
        {unreadNotifications.map(notification => (
          <li key={notification.id}>
            {notification.message}
            <button onClick={() => onMarkAsRead(notification.id)}>Mark as read</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
      <button onClick={() => setNotificationFilter('default')}>💠</button>
      {displayDrawer && <div>Your notification drawer is open.</div>}
    </div>
  );
}

Notifications.propTypes = {
  unreadNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  onMarkAsRead: PropTypes.func.isRequired,
  setNotificationFilter: PropTypes.func.isRequired,
};

export default Notifications;
