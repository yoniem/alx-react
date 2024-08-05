import { createSelector } from 'reselect';

const getCoursesState = (state) => state.courses;

export const getListCourses = createSelector(
  [getCoursesState],
  (courses) => courses.toJS()
);
