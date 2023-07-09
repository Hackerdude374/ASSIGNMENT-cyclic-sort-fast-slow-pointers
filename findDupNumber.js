/*

287. Find the Duplicate Number
Medium
19.8K/
3.1K
Companies
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.
*/


 //i guess we could use cyclic sort
 //the correct index is index = value-1
 //meaning if we had an array of [1,2,3,3,4] 
 //cyclic sort swaps numbers, so if it  was swapping a number to its correct index, but another same number is already in that same index, we found the dupe and return it.
 //so during sort, [1,2,3... ] //we found another 3 but oh look! 3 is already in place. return 3

 function findDuplicate(nums) {
    let i = 0;
    while (i < nums.length) {
        const correctIndex = nums[i] - 1;
        if (nums[i] !== i+1) {
            //same number already exists 
            if (nums[correctIndex] === nums[i]) {
                // Found the duplicate number
                return nums[i];
              }
              //swap
          [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
           
        } 
        i++;
      }
    
return "no dupe";
  }
//tests
//should be 2 
  let array1 = [1,3,4,2,2];
  console.log(findDuplicate(array1));
  //should be 3
  let array2 = [3,1,3,4,2];
  console.log(findDuplicate(array2));
  
