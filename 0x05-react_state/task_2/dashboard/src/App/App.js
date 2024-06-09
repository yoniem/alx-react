import { AppContext, defaultUser, defaultLogOut } from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true }
    });
  }

  logOut() {
    this.setState({
      user: defaultUser
    });
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div>
          <Header />
          {this.state.user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
          <Notifications />
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
