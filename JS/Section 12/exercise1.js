
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

// inside scope has access to it's outer scopes, which changes the var to 3

//#2
var a = 0;
function q2() {
    a = 5;
}


function q22() {
    alert(a);
}

// the scope where a = 5; has access to the global scope where a = 0;

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// window.a is the same as an assignment.  It's assigning a to the window variable, which it has access to
// if it said "var a = "hello"; then it would only exist in the child scope and be destroyed when the function 
// is returned.
// q3 stores the a var in the window (global) object (which it has access to)
// q32 has access to the window object

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

// we are declaring a variable in the root scope AND also declaring a variable in the child scope
// a isn't reassigned as we aren't saying "a = "test", which would re-assign it.  We are creating
// a variable with the same name, but because it exists in the child scope and won't exist after the 
// function has executed, it isn't causing a conflict.

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

// var is function scoped, so it means that when you assign a variable using var, it is limited to that
// scope *only* when it is in a function.  These rules don't apply when using them in other code blocks -
// this would be called 'block scoped' - like *let* and *const*

