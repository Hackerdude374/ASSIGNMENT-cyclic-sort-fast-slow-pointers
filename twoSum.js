/*167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
use fast and slow pointers and Linked list*/
//my theory
/*so the input array is already sorted
we could try fast and slow pointers since cyclic sort array cant be used.
so lets convert the array into a LL
then use fast and slow pointers 

*/
class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
  }

  function convertArrayToLinkedList(array) {
    let temp = new Node();
    let current = temp;
  
    for (let arr of array) {
      current.next = new Node(arr);
      current = current.next;
    }
  
    return temp.next;
  }



function twoSum(array, target){
    //convert array into LL
    let head = convertArrayToLinkedList(array);
    let slow = head,
   
    fast = head.next;
    console.log(slow.value);
    console.log(fast.value);
    let value1 = null;
    let value2 = null;
    while (fast !== null && fast.next !== null) {
        let sum = slow.value + fast.value; //sum of the first two in LL
        if(sum == target){
          //found the values 
            value1 = slow.value;
            value2 = fast.value;
            console.log(value1 + " and " + value2);
            break;
        }
        if(sum < target) { //fast is the bigger number(array sorted from least to graetst), slow can stay the same
            fast = fast.next;
        }
       
        slow = slow.next;
        fast = fast.next;
    
}
//get indices
let index1;
let index2;
if(value1!= null &&value2!= null){
for(let i = 0; i < array.length; i++){
    if(array[i] == value1){
        index1 = i;
    }
    if(array[i] == value2){
        index2 =i;
    }
}
return [index1,index2];
}
else
return "no sum exists"
}
//test cases
let array1 = [2,7,11,15];
let target1 = 9;
//should output 0 and 1
console.log(twoSum(array1,target1));

let array2 = [-1,0];
let target2 = -1
//should output 0 and 1
console.log(twoSum(array2,target2));
//unsure about this, says no sum but displays that -1 and 0 are found but dont add up to target -1?

let array3= [2,3,4];
let target3 = 6;
//should output 0 and 2
console.log(twoSum(array3,target3));

//ran this on an online compiler
module.exports = {
    twoSum,
    convertArrayToLinkedList,
  };
