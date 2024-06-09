class App extends React.Component {
  // Existing state and methods
  markNotificationAsRead(id) {
    this.setState(prevState => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id)
    }));
  }

  render() {
    return (
      <AppContext.Provider value={{ user: this.state.user, logOut: this.state.logOut }}>
        <div>
          {/* Existing components */}
          <Notifications 
            listNotifications={this.state.listNotifications} 
            markNotificationAsRead={this.markNotificationAsRead} 
          />
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}
