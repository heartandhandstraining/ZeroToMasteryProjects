const fs = require('fs');
// Import the fs module included with node.

// the readFile method takes two parameters, 1. the location of the file
// and 2. an anonymous callback function that takes two arguments.  Err and data.
// as it uses a callback function, it means it is asynchronous.

// Async recap: JS engine gets to the callback, then runs it, and when the callback has
// finished it will take the next action (err, or data). While this is happening, the rest
// of the JS in the script file is parsed and run.

fs.readFile('./hello.txt',(err, data) => {
    if (err) {
        console.log('errrrorrrrr'); 
    }
    console.log('Async: ', data.toString()); // if you don't encode the data then your console will log:
    // <Buffer 48 65 6c 6c 6f 20 74 68 65 72 65 21>
    // by default, if you run it through 'toString' it will also encode it to 'utf8' for you.
    // toString() is the same as: toString('utf8')
})


// readFileSync ( SYCH as in SYNCHRONOUS)

// This function is executed and halts execution until the function is completed.
const file = fs.readFileSync('./hello.txt');

console.log('Sync: ', file.toString());

// This method adds data to the file.  First param is the taget file (and creates one if 
// it doesn't exist), second param is the text you would like to add, third is a callback
// function with one argument to log an error if there is one.

fs.appendFile('./hello.txt', ' This is so cool!', err => {
    if (err) {
        console.log(err)
    }
})


// Write

fs.writeFile('bye.txt', 'sad to see you go', err => {
    if (err) {
        console.log(err);
    }
})

