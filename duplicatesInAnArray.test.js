const findDuplicates = require('./duplicatesInAnArray');

test('Find Duplicates Test Case 1', () => {
    let nums = [4,3,2,7,8,2,3,1]

  expect(findDuplicates(nums)).toEqual([3,2]);
});
//working
test('Find Duplicates Test Case 2', () => {
  let nums = [1, 2, 3, 4, 5];
  expect(findDuplicates(nums)).toEqual([]);
});

test('Find Duplicates Test Case 3', () => {
  let  nums = [1,1,2]
  expect(findDuplicates(nums)).toEqual([1]);
});

test('Find Duplicates Test Case 4', () => {
  let nums = [1];
  expect(findDuplicates(nums)).toEqual(null);
});
