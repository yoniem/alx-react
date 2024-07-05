// uiReducer.test.js
import { fromJS } from 'immutable';
import uiReducer from './uiReducer';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(
      fromJS({
        isNotificationDrawerVisible: false,
        user: null,
        loading: false,
      })
    );
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER', () => {
    let state = fromJS({
      isNotificationDrawerVisible: false,
    });

    state = uiReducer(state, { type: 'DISPLAY_NOTIFICATION_DRAWER' });

    expect(state.get('isNotificationDrawerVisible')).toEqual(true);
  });

  it('should handle HIDE_NOTIFICATION_DRAWER', () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    state = uiReducer(state, { type: 'HIDE_NOTIFICATION_DRAWER' });

    expect(state.get('isNotificationDrawerVisible')).toEqual(false);
  });

  it('should handle LOGIN', () => {
    let state = fromJS({
      user: null,
    });

    const user = { id: 1, name: 'John Doe' };
    state = uiReducer(state, { type: 'LOGIN', user });

    expect(state.get('user')).toEqual(fromJS(user));
  });

  it('should handle LOGOUT', () => {
    let state = fromJS({
      user: { id: 1, name: 'John Doe' },
    });

    state = uiReducer(state, { type: 'LOGOUT' });

    expect(state.get('user')).toEqual(null);
  });

  it('should handle SET_LOADING_STATE', () => {
    let state = fromJS({
      loading: false,
    });

    state = uiReducer(state, { type: 'SET_LOADING_STATE', loading: true });

    expect(state.get('loading')).toEqual(true);
  });

  it('should return current state if action type is unknown', () => {
    let currentState = fromJS({
      isNotificationDrawerVisible: false,
      user: null,
      loading: false,
    });

    const newState = uiReducer(currentState, { type: 'UNKNOWN_ACTION' });

    expect(newState).toEqual(currentState);
  });
});
