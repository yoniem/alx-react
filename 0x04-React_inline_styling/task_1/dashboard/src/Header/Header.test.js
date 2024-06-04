import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import logo from '../assets/holberton-logo.jpg';

describe('Header component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders an img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders a h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('has the correct img src and alt attributes', () => {
    const wrapper = shallow(<Header />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(logo);
    expect(img.prop('alt')).toBe('Holberton Logo');
  });
});
