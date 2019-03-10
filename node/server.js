const express = require('express');

const bodyParser = require('body-parser');

const app = express();

// Using body-parser here as middleware to make req.body usable (see comment in app.post func)

app.use(bodyParser.urlencoded({
    extended: false
})) // this allows the browser to send a HTML form info via a post request, and for us
// to handle the data as an object. Accessed by req.body

app.use(bodyParser.json());
// this allows the server to receive JSON data from a post request, and pass the data
// as a usable object in further functions.

app.get('/', (req, res) => {
    res.send('getting root')
})

app.get('/profile', (req, res) => {
    res.send('getting profile');
})

// There is a tool that allows us to make post request to a server and see what we get back
// called 'Postman'

app.post('/profile', (req, res) => {
    console.log(req.body); 
    // ^^ express can't log the req.body to the console (it logs as undefined) 
    // without some middleware.
    // You need the npm package body-parser. Its parses the req.body into
    // something that you can use.

    res.send('Success');
})

app.listen(3000)

