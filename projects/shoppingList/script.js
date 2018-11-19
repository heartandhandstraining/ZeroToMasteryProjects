const input = document.getElementById("addItem");
const subButton = document.getElementById("submit");
const ulElement = document.getElementById("list");

function inputLength() {
    return input.value.length;
}

// todo - add the element invisibly, then add opacity to fade in.
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
        this.parentElement.style.opacity = 0;
        node1 = this;
        function changeOp() {
            node1.parentElement.remove();
        }
        // use a callback func to 'block' async js while element fades out
    setTimeout(function() {
        return changeOp();
    },400);
        })
    }
}
addDeleteHandler();

subButton.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListWhenEnter);

