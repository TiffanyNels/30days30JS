const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const invalidEntry = document.querySelector(".invalid-entry");
const addButton = document.querySelector(".add-button");

function addTask() {
    if (inputBox.value === '') {
        invalidEntry.style.display = "block";
    } else {
        invalidEntry.style.display = "none"; 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
    inputBox.value = "";
}

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});