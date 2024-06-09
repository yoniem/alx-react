class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;
    return (
      <header>
        <h1>Header</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </section>
        )}
      </header>
    );
  }
}
