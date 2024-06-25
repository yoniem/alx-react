// reducers/uiReducer.test.js
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action)).toEqual(initialState);
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should set isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should set isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should set isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it('should set isUserLoggedIn to false when LOGOUT is passed', () => {
    const action = { type: LOGOUT };
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });
});
