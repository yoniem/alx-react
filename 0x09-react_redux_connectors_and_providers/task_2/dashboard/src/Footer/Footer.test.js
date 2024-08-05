import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the text "Footer"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toBe('Footer');
  });
});
