import UI from './Ui.js';
import Store from './Store.js';

// Task Class: Represents a Task
export default class Task {
    constructor(title, description, priority) {
        this.id = Date.now()
        this.title = title
        this.description = description
        this.priority = priority
        this.statue = 'Todo'
    }
}



// Event: Display Tasks
document.getElementById('projects').addEventListener('click',(e) => {
    if (e.target.classList.contains('project-name')) {

        // display tasks in Ui
        UI.displayTasks(e.target.nextElementSibling.value)
        UI.displayActiveProjectId(e.target.nextElementSibling.value)
    }
})

// // Event: Add a Task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#task-description').value
    const priority = document.querySelector('input[name="priority"]:checked').value;

    // Validate
    if (title === '' || description === '' || priority === '') {
        UI.showAlert('Please fill in all fields', 'danger')
    } else {
        // Instantiate task
        const task = new Task(title, description, priority)
        const projectId = document.getElementById('active-project-id').value

        // Add task to store
        Store.addTask(task, projectId)
        
        // Add Task to UI
        UI.displayTasks(task)
    }
})