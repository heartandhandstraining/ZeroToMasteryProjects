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
 const bodyParser = require('body-parser');

 const app = express();

 app.use(bodyParser.urlencoded(
     {
         extended: false
     }
 ));

 app.use(bodyParser.json());

 app.get('/:id', (req, res) => {
// Resful API common architechture
  // -- Requests ---/
    //  req.query
     // Gives you access to the query string. Is what we get when we do a get query in the browser, 
     // i.e. localhost:/3000?name=andrei&age=31
    //  req.body
     // using middleware we can access the data send to the server using req.body
    //  req.headers // changed to req.header(s) in new version of express
     // gives us access to the header. The header that the page sends us on a get request.
     // the website can put extra info into the header.
     //console.log(req.params)
     // gives us access to the parameters of the URL without knowing it beforehand.
     // i.e. if the first parameter in the 
     // get function is /:id
     // then the user of the website types: www.joel/com/aboot
     // then req.params would hold an object {id: 'aboot'}
     
  // -- Responses -- //
    res.status(404).send('Not found');
    // can be matched with req.params and the directory of /:id to respond with a 'not found error'

     //res.send('Here\'s the root')
 });

 app.get('/profile', (req, res) => {
     res.send('Here\'s the profile')
 });

 app.post('/profile', (req, res) => {
     console.log(req.body);
     res.send('Success')
     
 });

 app.listen(3000);