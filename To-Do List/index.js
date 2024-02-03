const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const invalidEntry = document.querySelector(".invalid-entry");

document.addEventListener("DOMContentLoaded", function () {
    showTask();
});

function addTask() {
    if (inputBox.value === '') {
        invalidEntry.style.display = "block";
    } else {
        invalidEntry.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value} <span class="remove-task" onclick="removeTask(this)">x</span>`;
        listContainer.appendChild(li);

        li.addEventListener("click", function () {
            li.classList.toggle("checked");
            saveData();
        });
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function removeTask(element) {
    let taskItem = element.parentElement;
    taskItem.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("todoList", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("todoList");

    if (savedData) {
        listContainer.innerHTML = savedData;
        document.querySelectorAll('li').forEach(item => {
            item.addEventListener("click", function () {
                item.classList.toggle("checked");
                saveData();
            });
        });
    }
}

showTask();