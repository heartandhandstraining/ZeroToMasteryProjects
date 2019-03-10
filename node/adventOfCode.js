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

})



