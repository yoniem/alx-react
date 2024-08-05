import { connect } from 'react-redux';
import { logout } from './actions/uiActions';

const mapStateToProps = (state) => ({
  user: state.ui.get('user')
});

const mapDispatchToProps = {
  logout
};

function Header(props) {
  const { user, logout } = props;
  // Component code with logout logic
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
