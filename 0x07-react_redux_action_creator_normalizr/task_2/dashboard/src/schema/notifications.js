import { normalizedData } from './notifications';

export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedData.entities;
  const userNotifications = Object.values(notifications).filter(
    notification => notification.author === userId
  );
  return userNotifications.map(notification => messages[notification.context]);
}
