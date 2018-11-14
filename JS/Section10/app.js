
const database = [
    {
        username: "jayfiled",
        password: "allDrainsLeadToTheOcean"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "peter",
        password: "packofpickles"
    }
];

const newsFeed = [
    {
        username: "emily",
        timeline: "I\'m hungry"
    },
    {
        username: "jason",
        timeline: "working remotely!"
    },
    {
        username: "megan",
        timeline: "shopping therapy?!"
    }
];


// create a sign in function that checks the database for the username
// and password, then shows the newsfeed if there is a matching username
// and password, and alerts a wrong U&P if incorrect.

//--- This is my code for sign in, but there is a cleaner way of doing, it
// and that is by validating the username and password, then using it in
// signIn function

// function signIn(u, p) {
//     for (let i = 0; i < database.length; i++) {
//         if (database[i].username === username
//              && database[i].password === password) {
//                 console.log("Welcome to your feed", newsFeed);
//                 return
//              }
//     }
//     alert("wrong username and/or password");
// }

function isUserValid(u, p) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === u
            && database[i].password === p) {
                return true;
            }
        // return false <-- if it isn't true, then it is falsey so no need  to return
    }
}

function signIn(u, p) {
    if (isUserValid(u, p))
    console.log("Welcome", newsFeed);
    else 
    alert("Wrong username and/or password!");
}

const username = prompt("enter username");
const password = prompt("enter password");

signIn(username, password);