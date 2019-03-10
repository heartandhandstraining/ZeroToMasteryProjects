
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

// setting up different routes.

app.get('/profile', (req, res) => {

    res.send('Getting profile')
})

// Node checks the first parameter on all of the methods for routes and will
// continue execution of that function if it matches what is requested from 
// the browser.

app.get('/about', (req, res) => {
    res.send('Here\'s the about page');
})

app.listen(3000); 

/* 
// Example of a browser refreshing and loading, how it sends a get request

// even if the browser sends a get request of localhost:3000/profile
// the server is only taking post requests - so there will be a 404 error.
// post requests need to send data to the server.

const express = require('express');

const app = express();

app.post('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobbies: 'Tennis'
    }
    res.send(user);
})

app.listen(3000);
 */