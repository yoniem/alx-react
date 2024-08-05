import { createSelector } from 'reselect';

// Input selectors
const getNotifications = (state) => state.notifications;
const getFilter = (state) => state.filter;

// Memoized selector
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    return notifications.filter((notification) => {
      const isUnread = !notification.isRead;
      const matchesFilter = filter === 'default' || (filter === 'urgent' && notification.type === 'urgent');
      return isUnread && matchesFilter;
    });
  }
);
