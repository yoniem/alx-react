import { fromJS } from 'immutable';
import { mapStateToProps } from './App';

describe('mapStateToProps', () => {
  it('should return the correct object', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
        isNotificationDrawerVisible: false,
      },
    });
    expect(mapStateToProps(state)).toEqual({
      isLoggedIn: true,
      displayDrawer: false,
    });
  });
});
