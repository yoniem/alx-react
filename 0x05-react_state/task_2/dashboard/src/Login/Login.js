class Login extends React.Component {
  // Existing state and methods
  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }
  // Existing render method
}
