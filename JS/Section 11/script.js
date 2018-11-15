const input = document.getElementById("addItem");
const subButton = document.getElementById("submit");
const ulElement = document.getElementById("list");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    const addDelButton = "<button type=\"submit\" class=\"deleteButton\">Delete</button>";
    li.innerHTML = input.value + " " + addDelButton;
    ulElement.appendChild(li);
    input.value = "";
    addDeleteHandler();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
        const allLi = document.getElementsByTagName("li");
    }
}

function addListWhenEnter(e) {
    if (inputLength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}

function addDeleteHandler() {
const delBut = document.querySelectorAll('.deleteButton');
for (node of delBut) {
    node.addEventListener('click', function() {
        node1 = this;
        function changeOp() {
            node1.parentElement.style.opacity = 0;
        }
    setTimeout(function() {
        return changeOp();
    },1001);
    node1.parentElement.remove();
        })
    }
}
addDeleteHandler();

subButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListWhenEnter);

