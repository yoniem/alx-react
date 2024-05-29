// task_2/dashboard/src/Notifications/Notifications.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { listNotifications } = this.props;
    return (
      <div className="Notifications">
        <button style={{ display: 'none' }} aria-label="Close" onClick={() => console.log('Close button has been clicked')} />
        <p>Here is the list of notifications</p>
        <ul>
          {listNotifications.length === 0 ? (
            <NotificationItem value="No new notification for now" />
          ) : (
            listNotifications.map(({ id, type, value, html }) => (
              <NotificationItem
                key={id}
                id={id}
                type={type}
                value={value}
                html={html}
                markAsRead={this.markAsRead}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  listNotifications: [],
};

export default Notifications;
