import React from 'react';
import { shallow } from 'enzyme';
import { Notifications, mapStateToProps } from './Notifications';
import { fromJS } from 'immutable';

describe('Notifications Component', () => {
  let wrapper;
  const notifications = [
    { id: 1, value: 'New course available' },
    { id: 2, value: 'New resume available' },
  ];

  beforeEach(() => {
    wrapper = shallow(<Notifications notifications={notifications} />);
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the correct number of notifications', () => {
    expect(wrapper.find('li').length).toBe(2);
  });
});

describe('mapStateToProps', () => {
  it('should return the correct object', () => {
    const state = fromJS({
      notifications: [
        { id: 1, value: 'New course available', isRead: false },
        { id: 2, value: 'New resume available', isRead: true },
      ],
    });
    const expectedProps = {
      notifications: [{ id: 1, value: 'New course available', isRead: false }],
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
