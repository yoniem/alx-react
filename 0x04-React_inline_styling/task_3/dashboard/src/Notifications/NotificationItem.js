import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  defaultItem: {
    color: 'blue',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    }
  },
  urgentItem: {
    color: 'red',
    '@media (max-width: 900px)': {
      width: '100%',
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    }
  }
});

const NotificationItem = ({ type, value, html }) => {
  const style = type === 'urgent' ? styles.urgentItem : styles.defaultItem;

  return (
    <li
      className={css(style)}
      data-notification-type={type}
      dangerouslySetInnerHTML={html ? { __html: html } : undefined}
    >
      {html ? null : value}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
