var _ = require('lodash');

console.log(_);

var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));


const colorLeft = document.querySelector("#grad-left");
const colorRight = document.querySelector("#grad-right");
const body = document.querySelector("body");
const linearGrad = document.querySelector("p");

colorLeft.addEventListener('input', function() {
    body.style.background = "linear-gradient(to left, " + colorLeft.value + ", " + colorRight.value + ")"; 
})

colorRight.addEventListener('input', function() {
    body.style.background = "linear-gradient(to left, " + colorLeft.value + ", " + colorRight.value + ")"; 
})

linearGrad.innerHTML = colorRight.value + ", " + colorLeft.value;
