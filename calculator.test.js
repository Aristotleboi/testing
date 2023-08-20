const { timeStamp } = require('console');
const calculator = require('./calculator');

test('add 2 numbers together', () => {
    expect(calculator.add(2, 2)).toBe(4);
});
test('subtract 2 numbers', () => {
    expect(calculator.subtract(6, 2)).toBe(4);
});
test('multiply 2 numbers together', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
});
test('divide 2 numbers', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

