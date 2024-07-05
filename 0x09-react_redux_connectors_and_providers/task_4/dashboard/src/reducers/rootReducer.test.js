import { combineReducers } from 'redux';
import { rootReducer } from './rootReducer';
import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';

describe('rootReducer', () => {
  it('should initialize state with combined reducers', () => {
    const state = rootReducer(undefined, {});
    expect(state).toEqual({
      ui: uiReducer(undefined, {}),
      courses: courseReducer(undefined, {}),
      notifications: notificationReducer(undefined, {}),
    });
  });

  it('should delegate actions to uiReducer', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const state = rootReducer({}, action);
    expect(state.ui).toEqual(uiReducer(undefined, action));
  });

  it('should delegate actions to courseReducer', () => {
    const action = { type: 'FETCH_COURSE_SUCCESS' };
    const state = rootReducer({}, action);
    expect(state.courses).toEqual(courseReducer(undefined, action));
  });

  it('should delegate actions to notificationReducer', () => {
    const action = { type: 'MARK_AS_READ' };
    const state = rootReducer({}, action);
    expect(state.notifications).toEqual(notificationReducer(undefined, action));
  });
});
