function addTask() {
    let taskInput = document.getElementById("task");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let timestamp = new Date().toLocaleString();
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <small>(${timestamp})</small> <button onclick="completeTask(this)">✔</button> <button onclick="removeTask(this)">X</button>`;
    document.getElementById("task-list").appendChild(li);
    taskInput.value = "";
}

function completeTask(button) {
    let li = button.parentElement;
    li.classList.add("completed");
    let completionTime = new Date().toLocaleString();
    let historyLi = document.createElement("li");
    historyLi.innerHTML = `${li.innerText} <small>(Completed: ${completionTime})</small>`;
    document.getElementById("history-list").appendChild(historyLi);
    li.remove();
}

function removeTask(button) {
    let li = button.parentElement;
    let removalTime = new Date().toLocaleString();
    let historyLi = document.createElement("li");
    historyLi.innerHTML = `${li.innerText} <small>(Deleted: ${removalTime})</small>`;
    document.getElementById("history-list").appendChild(historyLi);
    li.remove();
}