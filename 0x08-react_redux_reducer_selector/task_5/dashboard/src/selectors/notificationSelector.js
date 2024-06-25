// selectors/notificationSelector.js
import { createSelector } from 'reselect';

export const filterTypeSelected = state => state.get('filter');
export const getNotifications = state => state.get('notifications');

export const getUnreadNotifications = createSelector(
  getNotifications,
  notifications => notifications.filter(notification => !notification.get('isRead'))
);
