// Selecting elements from the DOM
const taskInput = document.getElementById("task");
const addButton = document.getElementById("add");
const taskList = document.getElementById("tasklist");
const clearAllButton = document.getElementById("ClearAll");

// Function to add a task
function addTask() {
  const taskValue = taskInput.value.trim();
  if (taskValue !== "") {
    const li = document.createElement("li");
    li.textContent = taskValue;

    // Add a delete button to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = () => li.remove();

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }
}

// Function to clear all tasks
function clearAllTasks() {
  taskList.innerHTML = "";
}

// Event listeners
addButton.addEventListener("click", addTask);
clearAllButton.addEventListener("click", clearAllTasks);