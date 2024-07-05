// Header.test.js
import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';
import { logout } from '../actions/uiActionCreators';

jest.mock('../actions/uiActionCreators', () => ({
  logout: jest.fn(),
}));

describe('<Header />', () => {
  let wrapper;
  const mockLogout = jest.fn();

  const initialProps = {
    user: { email: 'test@test.com', password: '1234' },
    logout: mockLogout,
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...initialProps} />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('contains the text "Header"', () => {
    expect(wrapper.text().includes('Header')).toBe(true);
  });

  it('displays user email when logged in', () => {
    expect(wrapper.text().includes('test@test.com')).toBe(true);
  });

  it('calls logout action on link click', () => {
    wrapper.find('a').simulate('click');
    expect(mockLogout).toHaveBeenCalled();
  });

  // Additional tests can go here
});
