// Show a weekday

// Write a function weekday(date) to find the weekday for a given Date object, returing either 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', or 'Sun'.
function weekday(date) {

  if (!(date instanceof Date)) {
    throw new Error("This is not a valid input.")
  }

  let dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] //  Per requirements "Mon" is indexed as 0.

  let targetDate = date.getDay(); // Invokes 'getDay() method to extract numeric value of day from 'date' argument and stores it in 'targetDate'. 

  return dayOfWeek[targetDate] //Returns string representing weekday name from array 'dayOfWeek' corresponding to index value stored in 'targetDate'. Per requirements "Mon" is indexed as 0.

}

// snippet from text

// Write a function snippet(string, maxlength) that shortens the string given to the maxlength and adds the ellipsis character ("…") to the end of string, and then returns the shortened string. If the string is shorter than the maxlength, just return the string unmodified.
function snippet(string, maxlength) {

}

//Number of properties
// Write a function numProps(obj) that returns the num of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

function numProps(obj){

}

//filterBetween
// Write a function filterBetween(array, min, max) that takes an array of numbers, a min value, and a max value. It returns a new array containing only the elements that are greater than or equal to min and less than or equal to max.
// Example:
  // let arr = [5, 10, 15, 20, 25, 30, 35]
  // filterBetween(arr, 15, 34) // => [15, 20, 25, 30]
  // filterBetween(arr, 22, 100) // => [25, 30, 35]

var minMaxNum = process.argv[2]+", "+process.argv[3]; //min/max arguments entered as string ("min, max"), are the 3rd and 4th array items in process.argv. 
console.log(minMaxNum); // check to confirm arguments passed through.
let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(numArray); // check to confirm array is populated;
function filterBetween(numArray, minNum, maxNum) {

}




module.exports = {weekday, filterBetween, snippet, numProps}