import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('should render correctly with no notifications', () => {
    const wrapper = shallow(<Notifications unreadNotifications={[]} />);
    expect(wrapper.find('li')).toHaveLength(1); // 1 li for the "No new notifications" message
  });

  it('should render notifications correctly', () => {
    const notifications = [
      { id: 1, message: 'Notification 1', isRead: false },
      { id: 2, message: 'Notification 2', isRead: true },
    ];
    const wrapper = shallow(<Notifications unreadNotifications={notifications} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(2); // Assuming NotificationItem is used for each notification
  });
});
