let Disappeared = require('./Disappeared');

test('Find Missing Numbers Test Case 1', () => {
  let nums = [4, 3, 2, 7, 8, 2, 3, 1];
  let result = [5, 6];
  expect(Disappeared(nums)).toEqual(result);
});

test('Find Missing Numbers Test Case 2', () => {
  let nums = [1, 1];
  let result = [2];
  expect(Disappeared(nums)).toEqual(result);
});
