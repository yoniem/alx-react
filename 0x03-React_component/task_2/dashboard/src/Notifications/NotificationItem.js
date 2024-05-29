// task_2/dashboard/src/Notifications/NotificationItem.js

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html, id } = this.props;
    return (
      <li data-notification-type={type} onClick={this.handleClick}>
        {value}
        {html && <p dangerouslySetInnerHTML={html}></p>}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;
