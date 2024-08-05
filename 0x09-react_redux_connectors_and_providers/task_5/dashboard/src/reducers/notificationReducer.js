const initialState = fromJS({
  notifications: [],
  loading: false
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATE:
      return state.set('loading', action.loading);
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', fromJS(action.notifications));
    // Other cases
    default:
      return state;
  }
};

export default notificationReducer;
