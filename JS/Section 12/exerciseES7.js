// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

let johnDrag = dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

const filtered = dragons.filter(nameOfDragon => nameOfDragon.includes('John'));

// #3) Create a function that calculates the power of 100 of a number entered as a parameter

const powerHundred = (x) => x**100

powerHundred(10000); // Infinity

// #4) Using your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

//Infinity is displayed when a number exceeds the upper limit of the floating point numbers, which is 1.797693134862315E+308.

