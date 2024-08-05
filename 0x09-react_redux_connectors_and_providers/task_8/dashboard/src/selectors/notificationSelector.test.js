import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('getUnreadNotificationsByType Selector', () => {
  const state = fromJS({
    notifications: [
      { id: 1, message: 'Notification 1', isRead: false, type: 'urgent' },
      { id: 2, message: 'Notification 2', isRead: false, type: 'default' },
      { id: 3, message: 'Notification 3', isRead: true, type: 'urgent' },
    ],
    filter: 'default',
  });

  it('should return all unread notifications when filter is set to default', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result).toEqual([
      { id: 1, message: 'Notification 1', isRead: false, type: 'urgent' },
      { id: 2, message: 'Notification 2', isRead: false, type: 'default' },
    ]);
  });

  it('should return all unread urgent notifications when filter is set to urgent', () => {
    const newState = state.set('filter', 'urgent');
    const result = getUnreadNotificationsByType(newState);
    expect(result).toEqual([{ id: 1, message: 'Notification 1', isRead: false, type: 'urgent' }]);
  });
});
