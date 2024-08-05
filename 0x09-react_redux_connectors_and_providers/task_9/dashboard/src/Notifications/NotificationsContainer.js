import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import Notifications from './Notifications';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

class NotificationsContainer extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    return (
      <Notifications 
        unreadNotifications={this.props.unreadNotifications} 
        displayDrawer={this.props.displayDrawer} 
        onMarkAsRead={this.props.markAsRead} 
        setNotificationFilter={this.props.setNotificationFilter} 
      />
    );
  }
}

const mapStateToProps = (state) => ({
  unreadNotifications: getUnreadNotificationsByType(state),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
