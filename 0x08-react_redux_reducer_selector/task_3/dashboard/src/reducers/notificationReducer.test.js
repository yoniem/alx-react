import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

describe('notificationReducer', () => {
  it('should return the default state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data };
    const expectedState = {
      ...initialState,
      notifications: data.map(notification => ({ ...notification, isRead: false }))
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = {
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
      ],
      filter: 'DEFAULT'
    };
    const action = { type: MARK_AS_READ, index: 1 };
    const expectedState = {
      ...initialState,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: true },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
      ]
    };
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      ...initialState,
      filter: 'URGENT'
    };
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });
});
