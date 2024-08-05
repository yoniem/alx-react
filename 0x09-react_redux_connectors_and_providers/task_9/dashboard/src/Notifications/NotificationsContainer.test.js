import React from 'react';
import { shallow } from 'enzyme';
import NotificationsContainer from './NotificationsContainer';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

describe('NotificationsContainer', () => {
  let wrapper;
  const mockFetchNotifications = jest.fn();
  const mockMarkAsRead = jest.fn();
  const mockProps = {
    fetchNotifications: mockFetchNotifications,
    markAsRead: mockMarkAsRead,
    unreadNotifications: [],
    displayDrawer: true,
  };

  beforeEach(() => {
    wrapper = shallow(<NotificationsContainer {...mockProps} />);
  });

  it('should call fetchNotifications on mount', () => {
    expect(mockFetchNotifications).toHaveBeenCalled();
  });

  it('should render Notifications component with props', () => {
    expect(wrapper.find('Notifications').props()).toEqual({
      unreadNotifications: [],
      displayDrawer: true,
      onMarkAsRead: mockMarkAsRead,
      setNotificationFilter: expect.any(Function), // Ensure it exists
    });
  });
});
