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
'my name is Rudolf the reindeer'

// Options to solve # 3
// New to ES8
Object.values

Object.entries

// Previously had:
Object.keys(obj). // at this point you can treat it like an array

// Solution 1

let newObj7 = Object.keys(obj)
      .reduce((acc, key) => acc += `${key} ${obj[key]} `
      ,[]);

// Solution 2

let newArr8 = Object.entries(obj)
      .reduce((acc, array) => acc += `${array[0]} ${array[1]} `
      ,"");

// Solution 3

Object.entries(obj).map(value => value.join(" ")).join(' ')

// Async Await is also another feature of ES8