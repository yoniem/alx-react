import { fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

describe('courseSelector', () => {
  it('should return the list of courses', () => {
    const state = {
      courses: fromJS([
        { id: '1', name: 'Course 1' },
        { id: '2', name: 'Course 2' },
      ]),
    };

    const expectedCourses = [
      { id: '1', name: 'Course 1' },
      { id: '2', name: 'Course 2' },
    ];

    expect(getListCourses(state)).toEqual(expectedCourses);
  });
});
