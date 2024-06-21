import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';
import { bindActionCreators } from 'redux';

// Action creators
export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({ type: LOGOUT });

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

// Async action creator
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    dispatch(login(email, password));
    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

// Bound action creators
export const boundLogin = (dispatch) =>
  bindActionCreators({ login }, dispatch);

export const boundLogout = (dispatch) =>
  bindActionCreators({ logout }, dispatch);

export const boundDisplayNotificationDrawer = (dispatch) =>
  bindActionCreators({ displayNotificationDrawer }, dispatch);

export const boundHideNotificationDrawer = (dispatch) =>
  bindActionCreators({ hideNotificationDrawer }, dispatch);

export const boundLoginRequest = (dispatch) =>
  bindActionCreators({ loginRequest }, dispatch);
