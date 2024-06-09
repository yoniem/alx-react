it('should call handleDisplayDrawer when the menu item is clicked', () => {
  const handleDisplayDrawer = jest.fn();
  const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
  wrapper.find('button').at(0).simulate('click');
  expect(handleDisplayDrawer).toHaveBeenCalled();
});

it('should call handleHideDrawer when the button is clicked', () => {
  const handleHideDrawer = jest.fn();
  const wrapper = shallow(<Notifications handleHideDrawer={handleHideDrawer} />);
  wrapper.find('button').at(1).simulate('click');
  expect(handleHideDrawer).toHaveBeenCalled();
});
