import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import { markAsRead } from '../actions/notificationActionCreators';

class Notifications extends React.Component {
  handleMarkAsRead = (id) => {
    this.props.markAsRead(id);
  };

  render() {
    const { notifications } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>
              {notification.value}
              <button onClick={() => this.handleMarkAsRead(notification.id)}>Mark as read</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  markAsRead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotifications(state),
});

const mapDispatchToProps = {
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
