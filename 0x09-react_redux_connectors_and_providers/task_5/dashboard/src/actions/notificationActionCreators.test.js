import {
  fetchNotificationsSuccess,
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

describe('notificationActionCreators', () => {
  it('should create an action to fetch notifications successfully', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const expectedAction = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    expect(fetchNotificationsSuccess(data)).toEqual(expectedAction);
  });

  it('should create an action to mark a notification as read', () => {
    const index = 1;
    const expectedAction = {
      type: MARK_AS_READ,
      index,
    };
    expect(markAsRead(index)).toEqual(expectedAction);
  });

  it('should create an action to set the notification filter', () => {
    const filter = NotificationTypeFilters.URGENT;
    const expectedAction = {
      type: SET_TYPE_FILTER,
      filter,
    };
    expect(setNotificationFilter(filter)).toEqual(expectedAction);
  });
});
