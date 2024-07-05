// notificationReducer.js
import { fromJS } from 'immutable';

const initialState = fromJS({
  notifications: [],
  loading: false,
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATIONS':
      return state.set('notifications', fromJS(action.notifications));

    case 'SET_LOADING_STATE':
      return state.set('loading', action.loading);

    default:
      return state;
  }
};

export default notificationReducer;

