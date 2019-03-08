// Node is like JS..

// Write JS in this script file, then in the terminal in the directory the 
// file is in, run: node
// script.js

// Variables

const fromScript2 /*use this as the objects name*/ = require('./script2.js')

// this imports an object, so you need to access the largeNumber property

const a = fromScript2.largeNumber;
const b = 6;

console.log(a + b);

// Outputs error when run "Unexpected token import"

// Need to use the common.js way.


// Useful method from the global object
// global.setTimeout

// setTimeout(() => {
//     console.log(a + b)

// }, 3000);

// Other useful things from the global object:

// console.log(__dirname);              
// Outputs: /home/jayfiled/Documents/git/ZeroToMasteryProjects/node

/// --------- TYPES OF MODULES ------------- ///

// 1. ones where you give the path name to require
// const x = require('./script2')

// 2. Built in Modules (already pre-installed with Node)

// for example:

// const c = require('fs').readFile // <-- No need for file paths
// console.log(c);
// Outputs the module that allows you to read the file system (fs)

// const d = require('fs').readFile // outputs the contents of the file and you can 
// do whatever you want with it.

// const e = require('http') // one to build a server

// and 3. Node Modules
// saved nodemon in dev dependencies (dev dependencies are tools to use when you are 
// developing your site, not for production)

// In ./node_modules/.bin/

// there are a bunch of files.  You can reference these names in your project
// and it allows you to reference the package in the node_modules root

// installed nodemon (node monitor) that watches for changes when you save your project
// and automatically updates the terminal







































































