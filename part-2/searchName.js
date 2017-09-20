	// 1.	searchByName.js takes one string argument (let's call it name), finds all the clients from clients.json who have a rep_name that starts with the name string, and prints the id and rep_name of each matching client.

// 1. Get required resources
var fs = require('fs'); //requires the node 'fs' library.
var clientData = require('./clients.json');
var targetModel = process.argv[2]; //search parameter is the 3rd array item.
// console.log(targetModel + " in targetModel");

// 2. load the clients.json file into the var 'clientData' (using absolute path).
const clientArray = JSON.parse(fs.readFileSync('./clients.json', 'utf8')); 

// 3. Declare helper function 'byModel' to match search parameter 'targetModel' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byModel(clientObj, index, clientData) { 
        // console.log(clientObj + " in clientObj");   
      if (clientObj.model == targetModel) {
            return true;
        }
        else {
            return false;
        }
    }

var clientsFound = clientArray.filter(byModel); // NOTE: byModel IS the callback.  runs filter method against new array 'clientsFound' containing matches output by 'byModel' helper function.
// console.log(JSON.parse(clientsFound));  // converts JSON string to object.
console.log(clientsFound + " in clientsFound"); // print all the values of clientsFound

for (i in clientsFound){
    // console.log(i + " in 'i'");
    for (key in clientsFound[i]){
     var badKeys = [
        'company',
        'no_employees'
        'phone',
        'city',
        'state',
        'created_at'
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + clientsFound[i][key]);
    }
    }        
}

// Include these values of each matching car:
    // `id`
    // `rep_name`
   
// 
        
// Exclude these values on these keys:
//  'company',
//  'no_employees'
//  'phone',
//  'city',
//  'state',
//  'created_at'