//filterBetween
// Write a function filterBetween(array, min, max) that takes an array of numbers, a min value, and a max value. It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.

// Example:

// let arr = [5, 10, 15, 20, 25, 30, 35]

// filterBetween(arr, 15, 34) // => [15, 20, 25, 30]
// filterBetween(arr, 22, 100) // => [25, 30, 35]

var minMaxNumbers = process.argv[2]+", "+process.argv[3]; //min/max arguments entered as string ("min, max"), are the 3rd and 4th array items in process.argv. 
console.log(minMaxNumbers); // check to confirm arguments passed through.
let numbersArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(numbersArray); // check to confirm array is populated;
function filterBetween(array, minNumber, maxNumber) {

}


