import { fromJS } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = fromJS({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const initialState = fromJS({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
    const expectedState = fromJS({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
    expect(uiReducer(initialState, action)).toEqual(expectedState);
  });
});
