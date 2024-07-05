import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

describe('<Notifications />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications displayDrawer={true} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three NotificationItem components', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('renders the correct html for the first NotificationItem element', () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.html()).toContain('<li data-notification-type="default">New course available</li>');
  });

  it('renders the text "Here is the list of notifications"', () => {
    expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
  });

  it('verifies that the first NotificationItem element renders the correct html', () => {
    const firstNotificationItem = wrapper.find(NotificationItem).first();
    expect(firstNotificationItem.html()).toContain('<li data-notification-type="default">New course available</li>');
  });

  it('verifies that the menu item is being displayed when displayDrawer is false', () => {
    wrapper.setProps({ displayDrawer: false });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(false);
  });

  it('verifies that the div.Notifications is being displayed when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('.menuItem').exists()).toBe(true);
    expect(wrapper.find('.Notifications').exists()).toBe(true);
  });
});

describe('<Notifications /> when fetching notifications', () => {
  let wrapper;

  beforeEach(() => {
    const fetchNotifications = jest.fn();
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={notifications}
        fetchNotifications={fetchNotifications}
      />
    );
  });

  it('calls fetchNotifications on component mount', () => {
    expect(wrapper.instance().props.fetchNotifications).toHaveBeenCalled();
  });

  it('renders the correct number of NotificationItem components', () => {
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });
});
