import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector';

export function Notifications({ notifications }) {
  return (
    <div className="notifications">
      <p>Here is the list of notifications</p>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.value}</li>
        ))}
      </ul>
    </div>
  );
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotifications(state),
});

export default connect(mapStateToProps)(Notifications);
