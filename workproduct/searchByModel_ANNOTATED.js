// 2. `searchByModel.js` takes one argument (let's call it the `model`), finds all the cars from `cars.json` who have a `model` value that _exactly matches_ the `model` argument, and prints the 
  // `id`
  // `model`
  // `year`
  // `last_owner`
  // `date_purchased` 
// of each matching car.

// searchByModel.js takes one string argument (targetModel), finds all the cars from 'cars.json' who have a Model that starts with the Model string, and prints the `id`
  // `model`
  // `year`
  // `last_owner`
  // `date_purchased`
// of each matching car.

// Your searches should not be case-sensitive: i.e. a search for "Boston" is the same as a search for "boston".


// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var carData = require('./cars');
var targetModel = process.argv[2]; //search parameter is the 3rd array item.
// console.log(targetModel + " in targetModel");

// 2. load the cars.json file into the var 'carData' (using absolute path).
const carArray = JSON.parse(fs.readFileSync('./cars.json', 'utf8')); 

// 3. Declare helper function 'byModel' to match search parameter 'targetModel' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byModel(carObj, index, carData) { 
        // console.log(carObj + " in carObj");   
      if (carObj.model == targetModel) {
            return true;
        }
        else {
            return false;
        }
    }

var carsFound = carArray.filter(byModel); // NOTE: byModel IS the callback.  runs filter method against new array 'carsFound' containing matches output by 'byModel' helper function.
// console.log(JSON.parse(carsFound));  // converts JSON string to object.
console.log(carsFound + " in carsFound"); // print all the values of carsFound

for (i in carsFound){
    // console.log(i + " in 'i'");
    for (key in carsFound[i]){
     var badKeys = [
      'make',
      'vin'
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + carsFound[i][key]);
    }
    }        
}

// Include these values of each matching car:
    // `id`
    // `model`
    // `year`
    // `last_owner`
    // `date_purchased` 
// 
        
// Exclude these values on these keys:
    // "make": "Chevrolet",
    // "vin": "4041371073370"