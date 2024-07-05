import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

export class Header extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };

  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>Header</h1>
        {user && (
          <div>
            <p>{user.email}</p>
            <a onClick={this.handleLogout}>Logout</a>
          </div>
        )}
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.ui.user,
});

export default connect(mapStateToProps, { logout })(Header);
