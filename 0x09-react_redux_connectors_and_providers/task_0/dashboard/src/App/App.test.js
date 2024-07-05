// App.test.js
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications/Notifications';
import CourseList from './CourseList/CourseList';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders a <Login /> component', () => {
    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it('renders a <Footer /> component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not render a <CourseList /> component when user is not logged in', () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('does not render <Notifications /> when user is not logged in', () => {
    expect(wrapper.find(Notifications)).toHaveLength(0);
  });
});
