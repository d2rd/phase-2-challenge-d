

// Your searches should not be case-sensitive: i.e. a search for "Bob" is the same as a search for "bob".  

// 1. Get required resources
const fs = require('fs'); //requires the node 'fs' library.
const clientData = require('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json');
var targetName = process.argv[2]; 

// 2. load the clients.json file into the var 'clientData' (using absolute path).
const clientArray = JSON.parse(fs.readFileSync('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json', 'utf8')); 


// 3. Declare helper function 'byName' to match search parameter 'targetName' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byName(clientObj, index, clientData) { 
        // console.log(clientObj + " in clientObj");   
      if (clientObj.name.toLowerCase() == targetName.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    var namesFound = clientArray.filter(byName); // NOTE: byName IS the callback.  runs filter method against new array 'namesFound' containing matches output by 'byName' helper function.

console.log("Finding clients with name beginning with \'" + targetName + "\'.");

// console.log(JSON.parse(namesFound));  // converts JSON string to object.

console.log(namesFound + " in namesFound"); // print all the values of namesFound

for (i in namesFound){
    // console.log(i + " in 'i'");
    for (key in namesFound[i]){
     var badKeys = [
        'company',
        'no_employees',
        'phone',
        'city',
        'state',
        'created_at'
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + namesFound[i][key] + "\n");
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
