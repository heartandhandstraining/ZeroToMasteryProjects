const input = document.getElementById("addItem");
const subButton = document.getElementById("submit");
const ulElement = document.getElementById("list");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ulElement.appendChild(li);
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        const allLi = document.getElementsByTagName("li");
    }
    toggleDone();
}

function addListWhenEnter(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
    toggleDone();
}

// this can definitely can be improved on..
// I feel like I am adding too many event listeners as more 
// li elements are added...
function toggleDone() {
    let allLi = document.getElementsByTagName("li");

    for (let i = 0; i < allLi.length; i++) {
        allLi[i].removeEventListener('click', function() {
        allLi[i].classList.toggle("done")
        });
        allLi[i].addEventListener('click', function(){
        allLi[i].classList.toggle("done")
        })
    }
}

toggleDone();
    

subButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListWhenEnter);

