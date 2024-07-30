import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { fromJS } from 'immutable';

describe('notification selectors', () => {
  const state = fromJS({
    notifications: {
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    },
    filter: "URGENT"
  });

  it('filterTypeSelected selector returns the correct filter', () => {
    expect(filterTypeSelected(state)).toEqual("URGENT");
  });

  it('getNotifications selector returns the correct notifications', () => {
    expect(getNotifications(state)).toEqual(state.get('notifications'));
  });

  it('getUnreadNotifications selector returns the correct unread notifications', () => {
    const unreadNotifications = {
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    };
    expect(getUnreadNotifications(state).toJS()).toEqual(unreadNotifications);
  });
});
