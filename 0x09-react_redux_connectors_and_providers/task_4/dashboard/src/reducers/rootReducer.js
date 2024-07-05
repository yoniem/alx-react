// rootReducer.js
import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import notificationReducer from './notificationReducer';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  notifications: notificationReducer,
  courses: courseReducer,
});

export default rootReducer;
