import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS
} from './notificationActionTypes';
import { bindActionCreators } from 'redux';
import fetch from 'node-fetch';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const fetchNotificationsSuccess = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    return fetch('path-to-notifications-api')
      .then(response => response.json())
      .then(data => dispatch(fetchNotificationsSuccess(data)))
      .catch(error => console.log(error));
  };
};

export const boundNotificationActionCreators = (dispatch) => bindActionCreators({
  markAsRead,
  setNotificationFilter,
  fetchNotifications
}, dispatch);
