const taskManager = new TaskManager();

const loadTasksBtn = document.getElementById("loadTasksBtn");
const statusMessage = document.getElementById("statusMessage");
const taskList = document.getElementById("taskList");

function renderTasks() {}

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