import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

function Notifications({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
  return (
    <div className="Notifications">
      <div className="menuItem" onClick={handleDisplayDrawer}>
        Your notifications
      </div>
      {displayDrawer && (
        <div className="Notifications-container">
          <button
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={handleHideDrawer}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }} />
          </ul>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
