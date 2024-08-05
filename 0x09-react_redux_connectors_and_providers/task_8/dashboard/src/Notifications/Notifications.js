import React from 'react';
import { connect } from 'react-redux';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const Notifications = ({ unreadNotifications, setNotificationFilter }) => {
  return (
    <div>
      <h2>Here is the list of notifications:</h2>
      <button onClick={() => setNotificationFilter('urgent')}>‼️</button>
      <button onClick={() => setNotificationFilter('default')}>💠</button>
      <ul>
        {unreadNotifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotificationsByType(state),
});

const mapDispatchToProps = {
  setNotificationFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
