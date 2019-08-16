const os = require('os');

console.log('Version SO: ', os.release());

console.log('Memoria Libre: ', os.freemem());

console.log("Memoria Total: " + os.totalmem());