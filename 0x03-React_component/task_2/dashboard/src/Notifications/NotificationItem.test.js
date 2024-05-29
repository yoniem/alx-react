// task_2/dashboard/src/Notifications/NotificationItem.test.js

import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('calls markAsRead function with id when clicked', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} markAsRead={markAsRead} />);
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalledWith(1);
  });
});
