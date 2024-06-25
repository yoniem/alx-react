// selectors/notificationSelector.test.js
import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notificationSelector', () => {
  const state = fromJS({
    notifications: {
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    },
    filter: 'DEFAULT'
  });

  it('filterTypeSelected works as expected', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications returns the list of notifications', () => {
    expect(getNotifications(state).toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    });
  });

  it('getUnreadNotifications returns the list of unread notifications', () => {
    expect(getUnreadNotifications(state).toJS()).toEqual({
      1: { id: 1, type: "default", value: "New course available", isRead: false },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false }
    });
  });
});
