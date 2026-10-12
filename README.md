# Assignment 4 - Task Dashboard

## File Organization
Here is how I structured the project:
- **`index.html`**: The main HTML file with the basic layout and empty containers for the tasks.
- **`styles.css`**: Basic styling for the app. It also includes the `.completed` class to cross out finished tasks.
- **`api.js`**: Contains the `fetchTasks()` function. I used a Promise and `setTimeout` to act like a real server with a 1.5-second delay.
- **`taskManager.js`**: This file has the `Task` and `TaskManager` classes. It handles adding, removing, and toggling tasks immutably without changing the original array.
- **`main.js`**: The core logic file. It fetches the data, handles the JSON conversion, updates the DOM dynamically, and manages the button clicks.

## Challenges Faced
- **Understanding Immutability:** I am used to adding items to arrays with `.push()`, so changing my habit to use the spread operator (`[...]`), `.map()`, and `.filter()` took some practice.
- **Read-only IDs:** Making the task ID completely immutable was a bit confusing at first. I had to use `Object.defineProperty` to lock the value successfully.
- **DOM Events:** Every time a task is toggled or deleted, the DOM needs to update. Re-rendering the list and attaching the event listeners properly to the new buttons was a tricky logic puzzle.