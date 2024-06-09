it('should remove notification from state when markNotificationAsRead is called', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  wrapper.setState({ listNotifications: [{ id: 1, value: 'Test notification' }] });
  instance.markNotificationAsRead(1);
  expect(wrapper.state().listNotifications).toEqual([]);
});
