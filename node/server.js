const express = require('express');

const app = express();

// I am the server
// I'll wait for a get request, then respond with something.

// use get()
// It takes 2 parameters; the get request's directory, and an anonymous func.
// The function in turn takes two arguments; the request data and response methods.

// The below is assuming the client is sending a get request for the root directory
// aka. www.joel.com  as opposed to www.joel.com/about <-- in the second instance
// you would need to set up the first parameter as '/about'
app.get('/', (req, res) => {
    const user = {
        name: 'John',
        hobby: 'soccer'
    }
    // If you send HTML, express takes care of the appropriate header
    // necessities, like stating that it's content type is text/html and,
    // if you send an object back, express with automatically 
    // send it through JSON.stringify() so it is presented to the 
    // browser as a JSON object.
    res.send(user);
})

app.listen(3000);