import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders the correct number of CourseListRow components with empty listCourses', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find(CourseListRow).length).toBe(2);
  });

  it('renders the correct number of CourseListRow components with non-empty listCourses', () => {
    const courses = [
      { id: 1, name: 'Course 1', credit: 3 },
      { id: 2, name: 'Course 2', credit: 4 }
    ];
    const wrapper = shallow(<CourseList listCourses={
