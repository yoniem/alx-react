// uiReducer.js
import { fromJS } from 'immutable';

const initialState = fromJS({
  isNotificationDrawerVisible: false,
  user: null,
  loading: false,
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DISPLAY_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', true);

    case 'HIDE_NOTIFICATION_DRAWER':
      return state.set('isNotificationDrawerVisible', false);

    case 'LOGIN':
      return state.set('user', action.user);

    case 'LOGOUT':
      return state.set('user', null);

    case 'SET_LOADING_STATE':
      return state.set('loading', action.loading);

    default:
      return state;
  }
};

export default uiReducer;
