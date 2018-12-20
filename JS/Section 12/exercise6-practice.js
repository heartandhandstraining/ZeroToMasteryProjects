// context vs scope

// scope created when using curly brackets, like functions:

function a() {
    let a = 3;
}

console.log(a); // reference error, because a isn't in scope

// context is where we are within the object, i.e.

console.log(this); // returns the window object console.log(this === window) // true
// this is equal to whatever object it is inside of
function a() {
    console.log(this);
}
a(); // returns the window object, because a() has been assigned to the window object.  It's now 
// a method of the window object
// same as: window.a()

const object4 = {
    a: function() {
        console.log(this);
    }
};
object4.a(); // returns object4

// why is it important? instantiation.
    // making instances, or multiple copies of objects

// if you ever want to make a copy of an object, it is a good idea to do it this way
    class Player {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
    }
// What's happening here?
    // Every time I want to make a copy of Player, the first thing that happens is
    // the constructor function gets run and create these properties on the player object

    class Player {
        constructor(name, type) {
            this.name = name;
            this.type = type;
        }
        introduce() {
            console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
        }
    }
// I want to create a new object called wizard that has whatever player has.
 
    class Wizard extends Player {
        constructor(name, type) { // these parameters are for the unique names you want to give the wizard
            super(name, type) // the super function is called to get the name and type from the object you want to copy
        }
        play() {
            console.log(`Weeee, I'm a ${this.type}`);
        }
    }
// Now the power is that we can create new wizards with unique values based on the arguments we pass in.

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');  













