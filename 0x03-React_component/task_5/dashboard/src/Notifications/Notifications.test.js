// task_5/dashboard/src/Notifications/Notifications.test.js

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  it('should not rerender when updating with the same list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications });

    expect(shouldUpdate).toBe(false);
  });

  it('should rerender when updating with a longer list', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' }
    ];

    const newListNotifications = [
      ...listNotifications,
      { id: 3, type: 'urgent', value: 'New data available' }
    ];

    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({ listNotifications: newListNotifications });

    expect(shouldUpdate).toBe(true);
  });
});
