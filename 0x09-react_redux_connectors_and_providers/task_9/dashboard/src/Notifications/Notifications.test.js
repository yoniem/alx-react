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
      { id: 1, message: 'Notification 1' },
      { id: 2, message: 'Notification 2' },
    ];
    const wrapper = shallow(<Notifications unreadNotifications={notifications} />);
    expect(wrapper.find('li')).toHaveLength(2); // Assuming each notification is rendered as a li element
  });

  it('should handle button clicks', () => {
    const wrapper = shallow(<Notifications unreadNotifications={[]} />);
    wrapper.find('button').at(0).simulate('click');
    // Add assertions based on expected behavior when buttons are clicked
  });
});
