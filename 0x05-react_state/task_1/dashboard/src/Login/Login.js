class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
      enableSubmit: false
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value }, this.validateSubmit);
  }

  handleChangePassword(e) {
    this.setState({ password: e.target.value }, this.validateSubmit);
  }

  validateSubmit() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <form onSubmit={this.handleLoginSubmit}>
        <input type="email" value={this.state.email} onChange={this.handleChangeEmail} />
        <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
        <input type="submit" value="Submit" disabled={!this.state.enableSubmit} />
      </form>
    );
  }
}
