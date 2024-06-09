import React from 'react';
import { AppContext } from '../App/AppContext';

const Footer = () => (
  <AppContext.Consumer>
    {({ user }) => (
      <footer>
        <p>Footer</p>
        {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
      </footer>
    )}
  </AppContext.Consumer>
);

export default Footer;
