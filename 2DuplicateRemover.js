/*2. Only unique items are allowed.
You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. */  

// Solution :- 

function duplicateRemover(arr){
    return new Set(arr);
}
console.log(duplicateRemover([10,10,5,5,5,1]));
const arr = [1,2,2,4,5,6,6,77,88,8,9];
console.log(duplicateRemover(arr));
