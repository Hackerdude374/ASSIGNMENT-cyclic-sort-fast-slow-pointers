
/*
iven an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
/
Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.*/

//my approach
//cyclic sort
//new results array
//any nums[i]!== i +1 is not pushed into this array
//then return the results length and the results array

function removeDups(array){
    if(array.length == 0){
        return null;
    }
    if(array.length == 1){
        return 1;
    }
    //cyclic sort
    let i = 0;
    while (i < array.length) {
        const correctIndex = array[i] - 1;
        if (array[i]!== i+1) {
          [array[i], array[correctIndex]] = [array[correctIndex], array[i]];  // swap
        } 
        i++;
      }
      let results = [];
      //push unique
      for(let i = 0; i < array.length; i++){
        if(array[i] == i+1){
            results.push(array[i]);
        }

      }
      return results.length + " unique elements, array :" + results;
}
//test
//should be 2 unique
let array1 = [1,1,2];
console.log(removeDups(array1));
//should be 4 unique
let array2 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDups(array2));
