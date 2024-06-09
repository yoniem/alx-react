it('should disable submit button by default', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
});

it('should enable submit button when both inputs are filled', () => {
  const wrapper = shallow(<Login />);
  wrapper.find('input[type="email"]').simulate('change', { target: { value: 'test@example.com' } });
  wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
  expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
});
