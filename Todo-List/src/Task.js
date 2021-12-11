import UI from './Ui.js';
// import Store from './Store.js';

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



// Event: Display All Tasks
document.addEventListener('DOMContentLoaded', UI.displayAllTasks)

// Event: Display Tasks
// document.querySelectorAll('.project-name').addEventListener('click',() => UI.displayTasks)
document.getElementById('projects').addEventListener('click',(e) => {
    if (e.target.classList.contains('project-name')) {

        // display tasks in Ui
        UI.displayTasks(e.target.nextElementSibling.value)

        // // Remove project from UI
        // e.target.parentElement.parentElement.remove()
        // // Remove project from store
        // Store.removeProject(e.target.firstChild.nextElementSibling.value)
        // console.log(e.target.nextElementSibling);
    }
})

// // // Event: Add a Task
// document.querySelector('#task-form').addEventListener('submit', (e) => {
//     // Prevent actual submit
//     e.preventDefault()

//     // Get form values
//     const title = document.querySelector('#task-title').value
//     const description = document.querySelector('#task-description').value
//     const priority = document.querySelector('#task-priority').value

//     // Validate
//     if (title === '' || description === '' || priority === '') {
//         UI.showAlert('Please fill in all fields', 'danger')
//     } else {
//         // Instantiate task
//         const task = new Task(title, description, priority)

//         // Add Task to UI
//         UI.addTaskToList(task)

//         // Add task to store
//         Store.addTask(task)

//         // Show success message
//         UI.showAlert('Task Added', 'success')

//         // Clear fields
//         UI.clearFields()
//     }
// })

// // Event: Remove a Task
// document.querySelector('#tasks').addEventListener('click', (e) => {
//     // Remove task from UI
//     UI.deleteTask(e.target)

//     // Remove task from store
//     Store.removeTask(e.target.parentElement.lastChild.previousElementSibling.value)

//     // Show success message
//     UI.showAlert('Task Removed', 'success')
// })