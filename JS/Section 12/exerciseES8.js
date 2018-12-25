// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '       🐢';
let rabbit = '       🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// answer - the turtle is two chars and padStart(9) fills in the space with as many characters inclusive of it's current length
const startLine = '     ||<- Start line';
let turtle = '🐢'.padStart(9);
let rabbit = '🐇'.padStart(9);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');  // "🐢======="

// The whitespace is removed with .trim() then for a total of 9 characters including what is already in the let variable
// replace the white space with 'equals to' operator, or whichever char you enter as the second argument

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
