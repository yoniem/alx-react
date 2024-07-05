// App.js
import React from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

export class App extends React.Component {
  render() {
    const { displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        {/* Other components */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  displayDrawer: state.ui.displayDrawer,
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
