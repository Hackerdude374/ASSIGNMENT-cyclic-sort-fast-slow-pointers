/*Problem Description: Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array),
 some elements appear twice and others appear once. 
 Find all the elements that appear twice in the array.*/


//ok so we know some elements appear once and twice
//we know cyclic sort usually sorts the arrays by unique elements first, then any duplicates or numbers like 0 are pushed in the back or in the worng index, in random order
//so i guess just sort the array and for loop, any element found out of place at the end is a dupe or inside is a dupe
//basically, any element not in the right index is a dupe.
//also account that even if 2 zeros, 0 is not a dupe and should not be counted


function findDuplicates(nums){
    let result = [];
   //sort the array first using cyclic sort.
    //base case: array has 0 or 1 element.
    if(nums.length == 0){
        return null;
    }
    if(nums.length ==1){ //the element should be 1
       
        return null; //no dupe
    }
    let i = 0;
    //cyclic sort 
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
      } else {
        i++;
      }
    }
//loop to push dupes
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!== i+1 && nums[i]!==0){ //dupes
            result.push(nums[i]);
        }
    }

   return result;


}


module.exports = findDuplicates;
