import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import NotificationItem from './NotificationItem';
import './Notifications.css';

const Notifications = ({ unreadNotifications }) => {
  return (
    <div className="notifications">
      <h2>Your Notifications</h2>
      <ul>
        {unreadNotifications.length === 0 ? (
          <li>No new notifications</li>
        ) : (
          unreadNotifications.map((notification) => (
            <NotificationItem key={notification.id} {...notification} />
          ))
        )}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  unreadNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      isRead: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotifications(state),
});

export default connect(mapStateToProps)(Notifications);

