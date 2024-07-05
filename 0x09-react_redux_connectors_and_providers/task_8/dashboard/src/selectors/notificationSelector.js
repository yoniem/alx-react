// notificationSelector.js

import { createSelector } from 'reselect';

const getNotifications = (state) => state.notifications;

export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.isRead)
);

export const getReadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => notification.isRead)
);
