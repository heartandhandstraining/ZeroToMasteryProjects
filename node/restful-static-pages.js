/* 
RESTFULful API

Defines a set of functions that devs can perform requests, and receive responses via HTTP protocol

GET, PUT, POST, DELETE

It's an approach to communications.  An architectural syle. An agreed upon set of rules so that 
everyone plays nicely

It's a way to define our server, so we can specify what it supplies and how to use it.
i.e. the url parameters should make sense, for example:

/profile - should respond with a profile if it receives a get request, or add a profile on a 
            put request.

** RESTful APIs are stateless, calls can be made independently of one another.   And each
call contains all of the data needed to complete the call successfully.
The server doesn't need to keep memorizing things.  Each call that comes in has the required
amount of information so that the server can do something with.

 */

const express = require('express');

const app = express();

// If we want to set up our server to respond with static files, we use a middleware
// calles static that comes with express, and use it with .use

app.use(express.static(__dirname + '/public')) // __dirname is 'node/'
// express goes to that folder, gets the static site, most likely index.html, and 
// also takes care of the app.get() function that sends a response.
// it would also load css and .js files if they are references in your html file.

// Then when you want to start using the RESTful API to do get, post, put, delete, then
// you can start adding the relevant functions to listen for those requests.

app.listen(3000);