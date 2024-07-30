import { Map } from 'immutable';

export const filterTypeSelected = (state) => state.get('filter', 'DEFAULT');

export const getNotifications = (state) => state.get('notifications', Map());

export const getUnreadNotifications = (state) => {
  return getNotifications(state).filter(notification => !notification.isRead);
};
