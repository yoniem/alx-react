import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { getUnreadNotifications } from '../selectors/notificationSelector';

const NotificationsContainer = () => {
  const unreadNotifications = useSelector(state => getUnreadNotifications(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  return <Notifications unreadNotifications={unreadNotifications} />;
};

export default NotificationsContainer;
