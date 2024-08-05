import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActions';

describe('App Component', () => {
  let wrapper;
  const mockDisplayNotificationDrawer = jest.fn();
  const mockHideNotificationDrawer = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <App
        isLoggedIn={false}
        displayDrawer={false}
        displayNotificationDrawer={mockDisplayNotificationDrawer}
        hideNotificationDrawer={mockHideNotificationDrawer}
      />
    );
  });

  it('should render without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render login message when user is not logged in', () => {
    expect(wrapper.find('p').text()).toBe('Please log in.');
  });

  it('should render welcome message when user is logged in', () => {
    wrapper.setProps({ isLoggedIn: true });
    expect(wrapper.find('p').text()).toBe('Welcome, user!');
  });

  it('should not render notification drawer when displayDrawer is false', () => {
    expect(wrapper.find('div').length).toBe(1); // Only the main div
  });

  it('should render notification drawer when displayDrawer is true', () => {
    wrapper.setProps({ displayDrawer: true });
    expect(wrapper.find('div').length).toBe(2); // Main div + notification drawer div
  });

  it('should call displayNotificationDrawer when Show Drawer button is clicked', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(mockDisplayNotificationDrawer).toHaveBeenCalled();
  });

  it('should call hideNotificationDrawer when Hide Drawer button is clicked', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(mockHideNotificationDrawer).toHaveBeenCalled();
  });
});

describe('mapStateToProps', () => {
  it('should return the correct object', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false
      }
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: false
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});

describe('mapDispatchToProps', () => {
  it('should dispatch displayNotificationDrawer action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).displayNotificationDrawer();
    expect(dispatch).toHaveBeenCalledWith(displayNotificationDrawer());
  });

  it('should dispatch hideNotificationDrawer action', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).hideNotificationDrawer();
    expect(dispatch).toHaveBeenCalledWith(hideNotificationDrawer());
  });
});
