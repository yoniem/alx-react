// reducers/courseReducer.js
import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return state.merge(fromJS(coursesNormalizer(action.data)));
    case SELECT_COURSE:
      return state.setIn(['courses', action.index.toString(), 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index.toString(), 'isSelected'], false);
    default:
      return state;
  }
};

export default courseReducer;
