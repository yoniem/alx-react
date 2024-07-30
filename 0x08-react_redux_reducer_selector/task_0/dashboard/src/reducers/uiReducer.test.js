import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const expectedState = { ...initialState, isNotificationDrawerVisible: true };
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(expectedState);
  });
});
