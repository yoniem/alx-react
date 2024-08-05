import React from 'react';
import { connect } from 'react-redux';

function App(props) {
  const { isLoggedIn } = props;
  // Your component code here
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.ui.get('isUserLoggedIn')
});

export default connect(mapStateToProps)(App);

