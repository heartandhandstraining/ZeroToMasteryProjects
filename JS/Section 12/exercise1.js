
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

// q3 stores the a var in the window (global) object (which it has access to)
// q32 has access to the window object

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);