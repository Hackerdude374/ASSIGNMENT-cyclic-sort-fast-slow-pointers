const findMissingNumber = require('./missingNumber');

test('Missing Number Test Case 1', () => {
  let arr = [3, 0, 1];
  expect(findMissingNumber(arr)).toBe(2);
});

test('Missing Number Test Case 2', () => {
  let arr = [0, 1];
  expect(findMissingNumber(arr)).toBe(2);
});

test('Missing Number Test Case 3', () => {
  let arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  expect(findMissingNumber(arr)).toBe(8);
});

test('Missing Number Test Case 4', () => {
  let arr = [2, 30, 1, 2, 0, 4];
  expect(findMissingNumber(arr)).toBe(3);
});

test('Missing Number Test Case 5', () => {
  let arr = [3, 1, 5, 4, 2];
  expect(findMissingNumber(arr)).toBe(null);
});
