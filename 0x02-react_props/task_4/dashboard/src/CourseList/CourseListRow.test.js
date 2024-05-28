// src/CourseList/CourseListRow.test.js
import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders without crashing', () => {
    shallow(<CourseListRow textFirstCell="test" />);
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
    expect(wrapper.find('th').prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test2" />);
    expect(wrapper.find('td')).toHaveLength(2);
  });
});
