import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

// Bound action creators
export const boundSelectCourse = (dispatch) =>
  bindActionCreators({ selectCourse }, dispatch);

export const boundUnSelectCourse = (dispatch) =>
  bindActionCreators({ unSelectCourse }, dispatch);
