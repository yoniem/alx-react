Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
};

// Add event handlers for "Your notifications" and the close button
<div>
  <button onClick={props.handleDisplayDrawer}>Your notifications</button>
  <button onClick={props.handleHideDrawer}>Close</button>
  {/* Other code */}
</div>
