import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem components', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the correct HTML for the first NotificationItem', () => {
    const firstNotificationItem = wrapper.find(NotificationItem).at(0);
    expect(firstNotificationItem.html()).toContain('New course available');
  });

  it('renders the correct HTML for the second NotificationItem', () => {
    const secondNotificationItem = wrapper.find(NotificationItem).at(1);
    expect(secondNotificationItem.html()).toContain('New resume available');
  });

  it('renders the correct HTML for the third NotificationItem', () => {
    const thirdNotificationItem = wrapper.find(NotificationItem).at(2);
    expect(thirdNotificationItem.html()).toContain('Server down');
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});
