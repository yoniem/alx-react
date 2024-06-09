import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render contact us link when user is logged in', () => {
    const contextValue = {
      user: { isLoggedIn: true, email: 'test@example.com' }
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive(); // Dive to access the Footer component within the Provider
    expect(wrapper.find('a').text()).toEqual('Contact us');
  });

  it('should not render contact us link when user is not logged in', () => {
    const contextValue = {
      user: { isLoggedIn: false }
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive(); // Dive to access the Footer component within the Provider
    expect(wrapper.find('a').exists()).toBe(false);
  });
});
