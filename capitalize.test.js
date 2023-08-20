const capitalize = require('./capitalize');

test('capitalizes the first letter of a string', () => {
    expect(capitalize('gage')).toBe('Gage');
});
