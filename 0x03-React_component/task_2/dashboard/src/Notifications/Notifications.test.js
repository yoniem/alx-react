// task_2/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('calls markAsRead function with id when notification is clicked', () => {
    const listNotifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(instance, 'markAsRead');
    instance.forceUpdate(); // Force re-render to update the instance

    wrapper.find('NotificationItem').simulate('click');
    expect(spy).toHaveBeenCalledWith(1);
    spy.mockRestore();
  });
});
