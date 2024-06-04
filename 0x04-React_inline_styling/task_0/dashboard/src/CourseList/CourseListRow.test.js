import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('applies header style when isHeader is true', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    expect(wrapper.find('tr').props().style).toHaveProperty('backgroundColor', '#deb5b545');
  });

  it('applies row style when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Row" />);
    expect(wrapper.find('tr').props().style).toHaveProperty('backgroundColor', '#f5f5f5ab');
  });
});
