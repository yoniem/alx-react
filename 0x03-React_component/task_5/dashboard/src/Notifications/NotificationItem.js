// task_5/dashboard/src/Notifications/NotificationItem.js

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, value, html } = this.props;
    return (
      <li data-notification-type={type} onClick={this.handleClick}>
        {html ? <span dangerouslySetInnerHTML={html}></span> : value}
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
