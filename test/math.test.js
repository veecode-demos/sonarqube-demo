// test/math.test.js
const { divide } = require('../src/math');

describe('divide()', () => {
  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides negative numbers', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  // Intentionally missing:
  // - division by zero case
  // - non-numeric inputs
});

