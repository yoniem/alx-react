it('should not display logout section when user is not logged in', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
      <Header />
    </AppContext.Provider>
  );
  expect(wrapper.find('#logoutSection').exists()).toBe(false);
});

it('should display logout section when user is logged in', () => {
  const wrapper = mount(
    <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}>
      <Header />
    </AppContext.Provider>
  );
  expect(wrapper.find('#logoutSection').exists()).toBe(true);
  expect(wrapper.find('#logoutSection').text()).toContain('Welcome test@example.com');
});

it('should call logOut when clicking the logout link', () => {
  const logOut = jest.fn();
  const wrapper = mount(
    <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut }}>
      <Header />
    </AppContext.Provider>
  );
  wrapper.find('#logoutSection a').simulate('click');
  expect(logOut).toHaveBeenCalled();
});
