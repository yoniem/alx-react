import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders one cell with colspan = 2 when isHeader is true and textSecondCell is not provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(1);
    expect(th.prop('colSpan')).toBe('2');
  });

  it('renders two cells when isHeader is true and textSecondCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
    const th = wrapper.find('th');
    expect(th.length).toBe(2);
    expect(th.at(0).text()).toBe('Test');
    expect(th.at(1).text()).toBe('Test2');
  });

  it('renders two td elements when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
    const td = wrapper.find('td');
    expect(td.length).toBe(2);
    expect(td.at(0).text()).toBe('Test');
    expect(td.at(1).text()).toBe('Test2');
  });

  it('applies the correct class for the row', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" />);
    expect(wrapper.hasClass('row')).toBe(true);
  });

  it('applies the correct class for the header row', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
    expect(wrapper.hasClass('headerRow')).toBe(true);
  });
});
