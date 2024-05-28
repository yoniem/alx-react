import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders an img tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders an h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
