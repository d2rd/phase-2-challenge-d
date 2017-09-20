// 2.	searchByState.js takes one string argument (let's call it the state), finds all the clients from clients.json who have a state that exactly matches the state, and prints the id, rep_name, company, city, and state of each matching client.
// Your searches should not be case-sensitive: i.e. a search for "Bob" is the same as a search for "bob".
  

// 1. Get required resources
const fs = require('fs'); //requires the node 'fs' library.
const clientData = require('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json');
var targetState = process.argv[2]; 

// 2. load the clients.json file into the var 'clientData' (using absolute path).
const clientArray = JSON.parse(fs.readFileSync('/Users/d2rd/Users/d2rd/lgProjects-local/lg-2/phase-2/phase-2-challenge-d/part-2/clients.json', 'utf8')); 


// 3. Declare helper function 'byState' to match search parameter 'targetState' to array values.
// Attribution for helper function:  https://www.youtube.com/watch?v=q_MXH_Ponpg
    function byState(clientObj, index, clientData) { 
        // console.log(clientObj + " in clientObj");   
      if (clientObj.state.toLowerCase() == targetState.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }

    var statesFound = clientArray.filter(byState); // NOTE: byState IS the callback.  runs filter method against new array 'statesFound' containing matches output by 'byState' helper function.
console.log("Finding clients with state beginning with \'" + targetState + "\'.");
// console.log(JSON.parse(statesFound));  // converts JSON string to object.
console.log(statesFound + " in statesFound"); // print all the values of statesFound

for (i in statesFound){
    // console.log(i + " in 'i'");
    for (key in statesFound[i]){
     var badKeys = [
        'no_employees',
        'phone',
        'created_at'
    ]
    if (badKeys.indexOf(key) == -1){
        console.log( key + ": " + statesFound[i][key]);
    }
    }        
}

// Include these values of each matching car:
    // `id`
    // `rep_name`
    // 'company',
      // 'city',
      // 'state'
   
// 
        
// Exclude these values on these keys:
//  'no_employees,
//  'phone',
//  'created_at'
