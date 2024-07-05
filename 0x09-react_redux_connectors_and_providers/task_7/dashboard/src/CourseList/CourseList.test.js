// CourseList.test.js

import React from 'react';
import { shallow } from 'enzyme';
import { CourseList } from './CourseList';

describe('CourseList Component', () => {
  let wrapper;
  let mockSelectCourse;
  let mockUnselectCourse;

  beforeEach(() => {
    mockSelectCourse = jest.fn();
    mockUnselectCourse = jest.fn();
    const mockProps = {
      courses: [
        { id: 1, name: 'Course 1', credit: 3 },
        { id: 2, name: 'Course 2', credit: 2 },
      ],
      selectCourse: mockSelectCourse,
      unselectCourse: mockUnselectCourse,
    };
    wrapper = shallow(<CourseList {...mockProps} />);
  });

  it('should render CourseList component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call selectCourse when the select button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockSelectCourse).toHaveBeenCalledWith(1);
  });

  it('should call unselectCourse when the unselect button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockUnselectCourse).toHaveBeenCalledWith(1);
  });
});
