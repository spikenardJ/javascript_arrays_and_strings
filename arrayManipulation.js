// Question 1: Exploring Array Manipulation in JavaScript

//  Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange'];

fruits.push("kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

//  Task 2: Sorting Arrays

let numbers = [3, 1, 5, 2, 4];
numbers.sort();
console.log(numbers);

let largeNumbers = [22, 58, 12, 91, 7];

largeNumbers.sort((a, b) => a - b);
console.log(largeNumbers);

//  Task 3: Applying Array Methods

// * Use the map method to double each number in the array

// numbers are now sorted to: [1, 2, 3, 4, 5] and so, desired result is: [2, 4, 6, 8, 10]
let doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers);

// largeNumbers are now sorted to: [7, 12, 22, 58, 91] and so, desired result is: [14, 24, 44, 116, 182]
let doubleLargeNums = largeNumbers.map((num) => num * 2);
console.log(doubleLargeNums);

// * Use the filter method to filter out even numbers from the array

// numbers are now sorted to: [1, 2, 3, 4, 5] and so, desired result is: [2, 4]
let evenNumbers = numbers.filter(x => x % 2 === 0);
console.log(evenNumbers);

// I wanted to do this with odd too, desired result is: [1, 3, 5]
let oddNumbers = numbers.filter(x => x % 2 === 1);
console.log(oddNumbers);

// * Use the reduce method to calculate the sum of all numbers in the array.

let sumNumbers = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumNumbers);

let sumLargeNumbers = largeNumbers.reduce((acc, curr) => acc + curr, 0);
console.log(sumLargeNumbers);