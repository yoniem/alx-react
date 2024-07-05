import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUnreadNotifications } from '../selectors/notificationSelector';
import { setNotificationFilter } from '../actions/notificationActionCreators';

const Notifications = () => {
  const unreadNotifications = useSelector(state => getUnreadNotifications(state));
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setNotificationFilter(filter));
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button onClick={() => handleFilterClick('DEFAULT')}>Show All</button>
      <button onClick={() => handleFilterClick('URGENT')}>Show Urgent</button>
      <ul>
        {unreadNotifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
        {unreadNotifications.length === 0 && <li>No new notifications</li>}
      </ul>
    </div>
  );
};

export default Notifications;
