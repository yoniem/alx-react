const initialState = fromJS({
  isUserLoggedIn: false,
  user: null
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return state.set('user', action.user);
    case LOGOUT:
      return state.set('user', null);
    // Other cases
    default:
      return state;
  }
};

export default uiReducer;
