// task_3/dashboard/src/utils.test.js
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns the correct year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getFooterCopy returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
