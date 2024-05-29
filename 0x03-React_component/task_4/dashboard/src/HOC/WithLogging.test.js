// task_4/dashboard/src/HOC/WithLogging.test.js

import React from 'react';
import { mount } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC', () => {
  it('logs mount and unmount for wrapped component with HTML element', () => {
    console.log = jest.fn();

    const TestComponent = () => <p />;
    const TestComponentWithLogging = WithLogging(TestComponent);

    const wrapper = mount(<TestComponentWithLogging />);
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component TestComponent is going to unmount');

    console.log.mockRestore();
  });

  it('logs mount and unmount for wrapped Login component', () => {
    console.log = jest.fn();

    const LoginWithLogging = WithLogging(Login);

    const wrapper = mount(<LoginWithLogging />);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');

    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith('Component Login is going to unmount');

    console.log.mockRestore();
  });
});
