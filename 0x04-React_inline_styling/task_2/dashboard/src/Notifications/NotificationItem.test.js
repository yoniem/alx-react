import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct HTML when type and value are provided', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.html()).toContain('<li data-notification-type="default">Test</li>');
  });

  it('renders the correct HTML when html is provided', () => {
    const wrapper = shallow(<NotificationItem type="default" html={{ __html: '<u>Test</u>' }} />);
    expect(wrapper.html()).toContain('<li data-notification-type="default"><u>Test</u></li>');
  });

  it('applies the correct class for default type', () => {
    const wrapper = shallow(<NotificationItem type="default" value="Test" />);
    expect(wrapper.hasClass('defaultItem')).toBe(true);
  });

  it('applies the correct class for urgent type', () => {
    const wrapper = shallow(<NotificationItem type="urgent" value="Test" />);
    expect(wrapper.hasClass('urgentItem')).toBe(true);
  });
});

