// dashboard/src/Footer/Footer.js
const mapStateToProps = (state) => {
  return {
    user: state.ui.user,
  };
};

export default connect(mapStateToProps)(Footer);
