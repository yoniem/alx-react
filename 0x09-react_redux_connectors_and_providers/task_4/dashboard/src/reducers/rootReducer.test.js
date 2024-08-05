import { fromJS } from 'immutable';
import rootReducer from './rootReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      ui: {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      },
      // Add other initial states for other reducers if needed
    });
    expect(rootReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = fromJS({
      ui: {
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {}
      },
      // Add other states if needed
    });
    expect(rootReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const initialState = fromJS({
      ui: {
        isNotificationDrawerVisible: true,
        isUserLoggedIn: false,
        user: {}
      },
      // Add other states if needed
    });
    const expectedState = fromJS({
      ui: {
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {}
      },
      // Add other states if needed
    });
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
