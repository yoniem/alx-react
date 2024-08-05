import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList Component', () => {
  let fetchCourses;
  let selectCourse;
  let unSelectCourse;
  let wrapper;

  beforeEach(() => {
    fetchCourses = jest.fn();
    selectCourse = jest.fn();
    unSelectCourse = jest.fn();
    const courses = [
      { id: '1', name: 'Course 1', isSelected: false },
      { id: '2', name: 'Course 2', isSelected: true },
    ];

    wrapper = shallow(
      <CourseList
        courses={courses}
        fetchCourses={fetchCourses}
        selectCourse={selectCourse}
        unSelectCourse={unSelectCourse}
      />
    );
  });

  it('should call fetchCourses on mount', () => {
    expect(fetchCourses).toHaveBeenCalled();
  });

  it('should render the correct number of CourseListRow components', () => {
    expect(wrapper.find(CourseListRow).length).toBe(2);
  });

  it('should call selectCourse when onChangeRow is called with checked true', () => {
    const onChangeRow = wrapper.find(CourseListRow).at(0).prop('onChangeRow');
    onChangeRow('1', true);
    expect(selectCourse).toHaveBeenCalledWith('1');
  });

  it('should call unSelectCourse when onChangeRow is called with checked false', () => {
    const onChangeRow = wrapper.find(CourseListRow).at(1).prop('onChangeRow');
    onChangeRow('2', false);
    expect(unSelectCourse).toHaveBeenCalledWith('2');
  });
});
