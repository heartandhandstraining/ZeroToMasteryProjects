// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

// I want to chain the whole thing..
  array.forEach((obj) => {

    const split = obj.username.split("");
    split.unshift("!"); // unshift doesn't return the array with changed values, only the length of the array
    obj.username = split.join("");
    
    });

//Create an array using map that has all the usernames with a "? to each of the usernames

const newArr = array.map(el => {el.username = `?${el.username}`;
})

//Filter the array to only include users who are on team: red

const filtered = array.filter(el => el.team === "red");

//Find out the total score of all users using reduce

const totalScore = array.reduce((accum, currentVal) => accum + currentVal.score, 0);

// (1), what is the value of i?         0, 1, 2, 3, 4, 5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newArr = array.map(user => {

    return user.items.map(item => {

      return item = `${item}!`
  
  })
})

const newArrWithReduce = array.reduce((acc, eachElement) => {
      return acc += eachElement;
}, []);


const newArrWithReduce = array.reduce((acc, eachElement) => {
  acc = [...array];
}, []);