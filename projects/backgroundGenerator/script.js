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
