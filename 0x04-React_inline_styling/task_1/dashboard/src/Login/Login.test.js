import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders two input elements', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(2);
  });

  it('renders two label elements', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('renders the submit button', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('button').text()).toBe('OK');
  });
});

