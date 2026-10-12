const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.addEventListener("click", () => {
      taskManager.toggleTask(task.id);
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskManager.removeTask(task.id);
      renderTasks();
    });

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);

    taskList.appendChild(taskDiv);
  });
}

async function handleLoadTasks() {
  statusMessage.textContent = "Loading tasks...";

  try {
    const rawTasks = await fetchTasks();

    const jsonString = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(jsonString);

    const taskInstances = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    taskManager.setTasks(taskInstances);
    renderTasks();

    statusMessage.textContent = "";
  } catch (error) {
    statusMessage.textContent = "Failed to load tasks. Please try again.";
  }
}

loadTasksBtn.addEventListener("click", handleLoadTasks);