import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Header"', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toBe('Header');
  });
});
