import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

const initialState = [];

describe('courseReducer', () => {
  it('should return the default state', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const action = { type: FETCH_COURSE_SUCCESS, data };
    const expectedState = data.map(course => ({ ...course, isSelected: false }));
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
