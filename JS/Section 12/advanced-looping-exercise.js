const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let tempStore = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > tempStore)
    tempStore = arr[i];
  }
  return tempStore;
}

biggestNumberInArray(array); // returns 100

// for in loops are for enumerating over an object.  Objects are enumerable.  Not iterable.

function biggestNumberInArray2(arr) {
  let tempNum = 0;
  for (number in arr) {
	if (arr[number] > tempNum)
		tempNum = arr[number];
  }
return parseInt(tempNum, 10);
}

biggestNumberInArray2(array2);

function biggestNumberInArray3(arr) {
	let tempNum = 0;
	for (number of arr){
 if (number > tempNum)
	tempNum = number
    }
return tempNum;   
}

biggestNumberInArray2(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  let inOrNot = false;
  for (item in lookingFor) {
    if (amazonBasket[lookingFor.toLowerCase()])
    inOrNot = true;
  }
  return inOrNot;
}

checkBasket(amazonBasket, 'books')