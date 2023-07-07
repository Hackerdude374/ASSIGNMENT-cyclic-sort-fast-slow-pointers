/*
1. Find the Missing Number

Problem Description: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.
link: https://leetcode.com/problems/missing-number/*/

//ok so we have distinct numbers, from 1 to n
//we have a  missing number
//the numbers appear to be NOT sorted. so we must sort it first.
//lets use cyclic sort, where array[value-1] = value
//after that, we for loop
//we will check each index's value, if its value is NOT the index plus 1, we found the missing number, 
//or if the value's index is not value -1, we have found the missing number.

function findMissingNumber(array){
    //sort the array first using cyclic sort.
    //base case: array has 0 or 1 element.
    if(array.length == 0){
        return null;
    }
    if(array.length ==1){ //the element should be 1
        if(array[0] !== 1){ //if 1 is not found
            return 1; // the missing number is 1.
        }
        return null; //no missing element
    }

    else{
    //case with more than 1 element.
    let i = 0;
    while(i < array.length){
        const correctIndex = array[i] -1;  //get the correct Index using cyclic sort logic.
        if(i!== correctIndex){
                [array[i], array[correctIndex]] = [array[correctIndex], array[i]];  // swap
        }
        i++;
    }
    //ok now our array is cyclic sorted.
    //search the array if array[i]!= i+1.
    //if so, return i+1. that is ouir missing element. 
    console.log(array);
    for(let i = 0; i< array.length; i++){
        if(array[i]!== i+1 ){
            return i+1; //our missing element has been found.
        }
    }
    return null;//no missing elements
    }
}

//test
let arr= [3,0,1];
console.log("the missing element is " + findMissingNumber(arr));

let arr1 = [0,1];
console.log("the missing element is " + findMissingNumber(arr1));

let arr2 = [9,6,4,2,3,5,7,0,1];
console.log("the missing element is " + findMissingNumber(arr2));

let arr3 = [2,30,1,2,0,4];
console.log("the missing element is " + findMissingNumber(arr3));

let arr5 = [3,1,5,4,2];
console.log(findMissingNumber(arr5));