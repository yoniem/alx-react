// selectors/courseSelector.js

import { createSelector } from 'reselect';

// Selector to get the courses state
const getCoursesState = (state) => state.courses;

// Selector to get the list of courses
export const getListCourses = createSelector(
  [getCoursesState],
  (coursesState) => coursesState.list
);
