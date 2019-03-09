const express = require('express');

const app = express();

// Express middle ware example.  

// You can define a function to happen before you start receiving
// the requests, so that you can do something with the requests before 
// they get to the routes, modifies it and passes it to the next function

app.use((req, res, next) => {
    console.log('<h1> Hellooooo</h1>');
    // with only the above, the browser does log to the console, but the 
    // page will keep loading waiting for the next action, so you need to
    // say what to do next with
    next();
})

app.get('/', (req, res) => {
    res.send('Helloo');
})

app.listen(3000);