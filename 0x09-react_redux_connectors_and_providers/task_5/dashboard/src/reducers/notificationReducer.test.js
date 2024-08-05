import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      notifications: [],
      filter: NotificationTypeFilters.DEFAULT,
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    };
    const expectedState = fromJS({
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      ],
      filter: NotificationTypeFilters.DEFAULT,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = fromJS({
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
      ],
      filter: NotificationTypeFilters.DEFAULT,
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const expectedState = fromJS({
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: true },
      ],
      filter: NotificationTypeFilters.DEFAULT,
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT };
    const expectedState = fromJS({
      notifications: [],
      filter: NotificationTypeFilters.URGENT,
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
