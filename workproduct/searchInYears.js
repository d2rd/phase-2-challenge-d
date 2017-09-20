// 1. prints the car  
//   `id`, 
//   `make`, 
//   `model`,
//   `year` 
// 2. all cars with a year inside the year range provided in the script argument. 
// 3. The range is _inclusive_—i.e. include cars with the same year as the start year or the end year of the range, as well as all years in between.


// 1. Get required resources
    var fs = require('fs'); //requires the node 'fs' library.
    var carData = require('./cars');
    var targetYears = process.argv[2]; //search parameter is the 3rd array item.
// console.log(targetYears + " in targetYears");

// 2. load the cars.json file into the var 'carData' (using absolute path).
    const carArray = JSON.parse(fs.readFileSync('./cars.json', 'utf8')); //using JSON.parse to convert JSON string into JSON object (review chat with Bonnie)

// 3. Declare helper function 'inYears' to match search parameter 'targetYears' to array values.
// Attribution:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function inYears(carObj, index, carData) { 
        // console.log(carObj + " in carObj");
//SPLIT var 'targetYears' into array 'targetYearsArray'
    targetYearsArray = targetYears.split("-");

     
      if (carObj.year >= targetYearsArray[0] && carObj.year <= targetYearsArray[1]) {
            return true;
        }
        else {
            return false;
        }
    }


var carsFound = carArray.filter(inYears); // NOTE: inYears IS the callback.  runs filter method against new array 'carsFound' containing matches output by 'inYears' helper function.
// console.log(JSON.parse(carsFound));  // converts JSON string to object.
// console.log(carsFound + " in carsFound"); // print all the values of carsFound

console.log("Finding cars from " + targetYearsArray[0] + " to " + targetYearsArray[1] + " inclusive.");
for (i in carsFound){
  // console.log(i + " in 'i'");
    for (key in carsFound[i]){
     var badKeys = [
      `vin`,
      `last_owner`,
      `date_purchased`
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + carsFound[i][key]);
    }
    }        
}
// Include these values of each matching car:
//     `id`,
//     `make`,
//     `model`,
//     `year`

// 
        
// Exclude these values on these keys by adding to 'badKeys' array:
//     `vin`
//     `last_owner`,
//     `date_purchased`