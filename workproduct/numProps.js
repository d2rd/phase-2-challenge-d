//Number of properties
// Write a function numProps(obj) that returns the num of properties an object has. Ignore symbolic properties and count only the "own properties" (not inherited) of the object.

// obj = {"lol": "what", owo: "pfft"};
// Object.keys(obj).length; // should be 2

let clients = {
    "id": 1,
    "rep_name": "Xymenes Dewer",
    "company": "Beahan, Swift and Hoppe",
    "no_employees": 742,
    "phone": "1-(863)994-6147",
    "city": "Lakeland",
    "state": "Florida",
    "created_at": "11/4/2003"
  };

function numProps(clients){
  propCount = Object.keys(clients).length; // should be 8
  return console.log(propCount);  // should be 8
}
numProps(clients);  
// function numProps(obj){
// propCount = obj.keys(obj).length;
// }