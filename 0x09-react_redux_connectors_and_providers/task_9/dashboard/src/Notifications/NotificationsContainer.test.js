import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsContainer } from './NotificationsContainer';

describe('NotificationsContainer Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<NotificationsContainer />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });
});
