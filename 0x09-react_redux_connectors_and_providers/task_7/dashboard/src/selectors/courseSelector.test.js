// actions/courseActionCreators.test.js

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchCourses, fetchCourseSuccess, selectCourse, unselectCourse } from './courseActionCreators';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('course action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates FETCH_COURSE_SUCCESS when fetching courses has been done', () => {
    fetchMock.getOnce('http://localhost:4000/courses', {
      body: [{ id: 1, name: 'Course 1', credit: 60 }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: FETCH_COURSE_SUCCESS, data: [{ id: 1, name: 'Course 1', credit: 60 }] },
    ];
    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to select a course', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index,
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it('should create an action to unselect a course', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index,
    };
    expect(unselectCourse(index)).toEqual(expectedAction);
  });
});
