import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer } from './actions/uiActions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible')
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer
};

function App(props) {
  const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = props;

  return (
    <div>
      {isLoggedIn ? <p>Welcome, user!</p> : <p>Please log in.</p>}
      {displayDrawer && <div>Notification Drawer</div>}
      <button onClick={displayNotificationDrawer}>Show Drawer</button>
      <button onClick={hideNotificationDrawer}>Hide Drawer</button>
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
