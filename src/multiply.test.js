const multiply = require('./multiply');

test('multiply 2 and 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});
