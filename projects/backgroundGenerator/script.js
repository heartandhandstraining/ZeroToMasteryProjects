const colorLeft = document.querySelector("#grad-left");
const colorRight = document.querySelector("#grad-right");
const body = document.querySelector("body");

colorLeft.addEventListener('input', function() {
    body.style.background = "linear-gradient(to left, " + colorLeft.value + ", " + colorRight.value + ")"; 

})


console.log(body.style.background);
