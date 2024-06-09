Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(PropTypes.object),
  markNotificationAsRead: PropTypes.func
};

Notifications.defaultProps = {
  listNotifications: [],
  markNotificationAsRead: () => {}
};

// Update render method to use `markNotificationAsRead`
