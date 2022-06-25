const numbers = [12, 2, 18, 93, 8, 51];

const newNumber = numbers.sort( (a, b) => {
    return b-a;
})

console.log(newNumber[1]);

// function secondLargest(arr) {
  
// }
// module.exports = secondLargest



// # Challenge 1

// Implement a function secondLargest(arr) that takes an array of numbers and returns the second largest number.

// # Example
//     secondLargest([6, 3, 0, 30, 7]) to return 7
//     secondLargest([71, 33, 3, 51, 18, 6]) to return 51
//     secondLargest([42, 68, 22, 60, 7]) to return 60
