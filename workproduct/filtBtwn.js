
let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // source array

// let numsBetween = numArray.filter(numArray > minNum) &&  numArray.filter(numArray < maxNum);
function filterBetween(numArray, minNum, maxNum) {  
  let numsBetween = numArray.filter(numArray > minNum &&  numArray < maxNum);
  return console.log(numsBetween)
}

filterBetween(numArray, 22, 79);