/*Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]*/


//should be easy
//cyclic sort the array.
//any number that is not following cyclic standards (value!= index+1) is pushed or array[i] !== i+1, push i +1 (the missing value_)

function Disappeared(nums){
    const missing = [];

    let i = 0;
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
      } else {
        i++;
      }
    }
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== i + 1) {
        missing.push(i + 1);
      }
    }
  
    return missing;
}

module.exports = Disappeared;
