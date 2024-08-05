import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.ui.get('user')
});

function Footer(props) {
  const { user } = props;
  // Component code
}

export default connect(mapStateToProps)(Footer);
