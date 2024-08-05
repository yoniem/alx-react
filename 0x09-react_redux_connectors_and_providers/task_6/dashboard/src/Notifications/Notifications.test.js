import React from 'react';
import { shallow } from 'enzyme';
import { Notifications } from './Notifications';

describe('Notifications Component', () => {
  let wrapper;
  const mockMarkAsRead = jest.fn();
  const props = {
    notifications: [
      { id: '1', value: 'Notification 1' },
      { id: '2', value: 'Notification 2' },
    ],
    markAsRead: mockMarkAsRead,
  };

  beforeEach(() => {
    wrapper = shallow(<Notifications {...props} />);
  });

  it('should render the list of notifications', () => {
    expect(wrapper.find('li')).toHaveLength(2);
  });

  it('should call markAsRead when a notification is marked as read', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockMarkAsRead).toHaveBeenCalledWith('1');
  });
});
