import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const mockOnMarkAsRead = jest.fn();
  const mockSetNotificationFilter = jest.fn();
  const mockUnreadNotifications = [
    { id: 1, message: 'Notification 1' },
    { id: 2, message: 'Notification 2' },
  ];

  beforeEach(() => {
    wrapper = shallow(
      <Notifications 
        unreadNotifications={mockUnreadNotifications} 
        displayDrawer={true} 
        onMarkAsRead={mockOnMarkAsRead} 
        setNotificationFilter={mockSetNotificationFilter} 
      />
    );
  });

  it('should render the notifications list', () => {
    expect(wrapper.find('h2').text()).toBe('Here is the list of notifications:');
    expect(wrapper.find('li')).toHaveLength(mockUnreadNotifications.length);
  });

  it('should call onMarkAsRead when mark as read button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockOnMarkAsRead).toHaveBeenCalledWith(mockUnreadNotifications[0].id);
  });

  it('should call setNotificationFilter with urgent when urgent button is clicked', () => {
    wrapper.find('button').at(2).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('urgent');
  });

  it('should call setNotificationFilter with default when default button is clicked', () => {
    wrapper.find('button').at(3).simulate('click');
    expect(mockSetNotificationFilter).toHaveBeenCalledWith('default');
  });
});
