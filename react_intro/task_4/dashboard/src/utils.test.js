import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";


// Test that getFullYear returns the correct year
test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
});

// Test that getFooterCopy returns the correct string when the argument is true or false
test('getFooterCopy returns the correct string when the argument is true or false', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

// Test that getLatestNotification returns the correct string
test('getLatestNotification returns the correct string', () => {
    const expectedString = 'Urgent requirement - complete by EOD';
    expect(getLatestNotification()).toBe(expectedString);
});