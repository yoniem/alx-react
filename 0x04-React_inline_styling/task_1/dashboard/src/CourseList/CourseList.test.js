import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CourseList />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct number of rows', () => {
    expect(wrapper.find(CourseListRow).length).toBe(5); // Adjust the number as needed based on your implementation
  });

  it('renders the header row', () => {
    expec
