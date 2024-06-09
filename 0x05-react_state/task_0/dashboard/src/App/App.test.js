it('should set displayDrawer to true when handleDisplayDrawer is called', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().displayDrawer).toBe(false);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toBe(true);
});

it('should set displayDrawer to false when handleHideDrawer is called', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state().displayDrawer).toBe(true);
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state().displayDrawer).toBe(false);
});
