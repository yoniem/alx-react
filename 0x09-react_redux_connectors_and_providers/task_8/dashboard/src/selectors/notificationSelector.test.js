import { fromJS } from 'immutable'; // Assuming Immutable.js is used for state
import { getUnreadNotifications } from './notificationSelector';

describe('Notification Selector', () => {
  it('should return unread notifications', () => {
    const state = fromJS({
      notifications: {
        notifications: [
          { id: 1, message: 'Notification 1', isRead: false },
          { id: 2, message: 'Notification 2', isRead: true },
          { id: 3, message: 'Notification 3', isRead: false },
        ],
      },
      filter: 'DEFAULT',
    });

    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toHaveLength(2);
    expect(unreadNotifications[0].message).toEqual('Notification 1');
    expect(unreadNotifications[1].message).toEqual('Notification 3');
  });

  // Additional tests can be added for different filters if applicable
});
