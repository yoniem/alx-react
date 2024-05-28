import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders a li element with correct data attributes and content', () => {
    const wrapper = shallow(
      <NotificationItem
        id={1}
        type="default"
        value="Test notification"
        html={{ __html: '<strong>Test notification</strong>' }}
      />
    );
    const li = wrapper.find('li');
    expect(li.exists()).toBe(true);
    expect(li.props()['data-notification-type']).toEqual('default');
    expect(li.props().dangerouslySetInnerHTML.__html).toEqual('<strong>Test notification</strong>');
    expect(li.text()).toEqual('Test notification');
  });
});
