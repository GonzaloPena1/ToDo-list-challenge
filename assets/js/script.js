// Function to delete a To-Do item
function deleteTask(listItem, task) {
  listItem.remove(); // Remove item from UI
  todoSet.delete(task.toLowerCase()); // Remove task from Set
}
//1. Select the To-Do input field
const todoInput = document.getElementById("todoInput");

// 2. Select the Add button
const addButton = document.getElementById("addButton");

// 3. Select the To-Do list container
const todoList = document.getElementById("searches");

// 4. Store unique To-Do tasks in a Set
let todoSet = new Set();

// 5. Add event listener to the Add button
addButton.addEventListener("click", function () {
  addTask();
});

// Function to add a new To-Do item
function addTask() {
  const task = todoInput.value.trim().toLowerCase(); // Normalize case

  // Validate input
  if (task === "") {
    alert("Please enter a To-Do item!");
  } else if (todoSet.has(task)) {
    alert("This task is already on the list!");
  } else {
    // Create list item
    const listItem = document.createElement("li");
    listItem.style.marginBottom = "10px";

    // Create span to hold text
    const taskSpan = document.createElement("span");
    taskSpan.textContent = task;
    listItem.appendChild(taskSpan);

    // Create Update button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.style.marginLeft = "10px";
    updateButton.addEventListener("click", function () {
      updateTask(listItem, taskSpan, task);
    });

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "5px";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.addEventListener("click", function () {
      deleteTask(listItem, task);
    });

    // Append buttons to list item
    listItem.appendChild(updateButton);
    listItem.appendChild(deleteButton);

    // Append list item to To-Do list
    todoList.appendChild(listItem);

    // Add task to Set
    todoSet.add(task);

    // Clear input field
    todoInput.value = "";
  }
}

// Function to update a To-Do item
function updateTask(listItem, taskSpan, oldTask) {
  const newTask = prompt("Update your task:", taskSpan.textContent);

  if (newTask && newTask.trim() !== "") {
    const normalizedNewTask = newTask.trim().toLowerCase();

    if (todoSet.has(normalizedNewTask) && normalizedNewTask !== oldTask) {
      alert("This task already exists!");
    } else {
      // Remove the old task from the Set
      todoSet.delete(oldTask);

      // Update UI
      taskSpan.textContent = newTask;

      // Add the new task to the Set
      todoSet.add(normalizedNewTask);
    }
  }
}

// Function to delete a To-Do item
function deleteTask(listItem, task) {
  listItem.remove(); // Remove item from UI
  todoSet.delete(task); // Fully remove from Set
}
