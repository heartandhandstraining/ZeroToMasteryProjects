// Understand.

    // Start on floor 0
    // This symbol means go up one floor ( 
    // This symbol means go down one floor )

    // The total amount of ( minus the total amount of ) should result in the right answer.

// Divide.


    // 1. Split the input into an array.
    // 2. Map over the array and on each element evaluate a statement that checks 
    // if the element is a ( or ), then increment a relevant counter.

    // 3. Result === the two totals subracted from each other.


const fs = require('fs');

fs.readFile('directions.txt', (err, data) => {
    console.time('startFunc')
    if (err) {
        console.log(err);
    }

    // 1.
    const payloadArray = data.toString().split('');

    // 2.
    counterForOpen = 0;
    counterForClosed = 0

    payloadArray.map( el => el === '(' ? counterForOpen += 1 : counterForClosed += 1 )
    
    // 3.
    console.log(counterForOpen - counterForClosed);
    console.timeEnd('startFunc');

}) // i.94ms

// Part 2.

// Find the position of the first character that causes him to enter the basement (floor -1)
// The first character has position one.

// We need to increase a single counter for every ( and decrease the counter for every )
// when the counter reaches -1, we need to log the index of the character that calculated -1
// then, because arrays are a 0 index data structure, we need to increase the index by 1.

// Divide
    // While the counter is more than or equal to -1, increment counter for each ( and decrement
    // for every ). Log the position.
    //--Important--// The index isn't the postion. So I will need to add 1 to whatever the 
    // index is of the character that causes -1. And also, remove 1 if I am logging the index
    // inside a for-loop, as the index is incremented *after* the expressing inside is 
    // evaluated.

    const countDirections = () => {
        
        fs.readFile('./directions.txt', (err, data) => {
            console.time('funFunction')
            
            const directions = data.toString().split('');

            let counter = 0;
    
            for (let i = 0; counter >= -1; i++) {
                console.log(`Counter: ${counter} index of array: ${i}`)
                directions[i] === '(' ? counter += 1 : counter -= 1;

            }
            console.timeEnd('funFunction') // 24.99 ms
        })

    }

    countDirections();



// Andrei's way of breaking it down:

// Write out how many parts of the puzzle.
    // Write out the rules.

// 1 - What floor does Santa end up on? 280

// 2 - When does Santa enter the basement?

// Array.some()



