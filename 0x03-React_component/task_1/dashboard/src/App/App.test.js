// task_1/dashboard/src/App/App.test.js

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('calls logOut function and displays alert when control+h are pressed', () => {
    const logOut = jest.fn();
    const wrapper = shallow(<App logOut={logOut} />);
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);
    expect(logOut).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});
