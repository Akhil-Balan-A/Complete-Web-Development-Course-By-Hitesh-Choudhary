document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Load saved tasks
  tasks.forEach(renderTask);

  // Add new task
  addBtn.addEventListener("click", () => {
    const todoInput = document.getElementById("todo-input");
    const text = todoInput.value.trim();

    if (!text) return;

    const newTask = {
      id: Date.now(),
      description: text,
      complete: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);

    todoInput.value = "";
    todoInput.focus();
  });

  // Render one task
  function renderTask(task) {
    const li = document.createElement("li");
    li.classList.add("list");
    li.dataset.id = task.id;

    const span = document.createElement("span");
    span.classList.add("text");
    span.innerText = task.description;

    if (task.complete) {
      span.style.textDecoration = "line-through";
    }

    const delBtn = document.createElement("button");
    delBtn.classList.add("delete-button");
    delBtn.innerText = "Delete";

    li.appendChild(span);
    li.appendChild(delBtn);
    todoList.appendChild(li);
  }

  // Event delegation for strike & delete
  todoList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);
    const task = tasks.find(t => t.id === id);

    // Toggle complete
    if (e.target.classList.contains("text")) {
      task.complete = !task.complete;
      e.target.style.textDecoration = task.complete ? "line-through" : "none";
      saveTasks();
    }

    // Delete task
    if (e.target.classList.contains("delete-button")) {
      tasks = tasks.filter(t => t.id !== id);
      saveTasks();
      li.remove();
    }
  });

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
