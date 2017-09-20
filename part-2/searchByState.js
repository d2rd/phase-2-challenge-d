var fs = require('fs');

var clients = fs.readFileSync('./clients.json', 'utf8');

// var searchByState = require('./searchByState.js')
// var clients = require('./clients.json');

console.log(clients);