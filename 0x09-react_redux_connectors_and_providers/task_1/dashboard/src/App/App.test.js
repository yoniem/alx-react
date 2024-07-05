// App.test.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import uiReducer from '../reducers/uiReducer';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const store = createStore(uiReducer);

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the Notifications component', () => {
    expect(wrapper.dive().find(Notifications).length).toBe(1);
  });

  it('passes the correct props to Notifications component', () => {
    const notificationsComponent = wrapper.dive().find(Notifications);
    expect(notificationsComponent.prop('displayDrawer')).toBe(false);
    expect(notificationsComponent.prop('handleDisplayDrawer')).toBe(displayNotificationDrawer);
    expect(notificationsComponent.prop('handleHideDrawer')).toBe(hideNotificationDrawer);
  });
});
