import UI from './Ui.js';
import Store from './Store.js';

// // Project Class: Represents a Project
export default class Project {
    constructor(title) {
        this.id = Date.now()
        this.title = title
        this.statue = 'Todo'
        this.Tasks = []
    }
}

// Event: Display Projects
document.addEventListener('DOMContentLoaded', UI.displayProjects)

// // // // Event: Add a Project
document.querySelector('#project-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title = document.querySelector('#project-title').value

    // Validate
    if (title === '') {
        alert('Please fill in all fields', 'danger')
    } else {
        // Instantiate project
        const project = new Project(title)

        // Add Project to UI
        UI.addProjectToList(project)

        // Add project to store
        Store.addProject(project)

        // Clear fields
        UI.clearFields()
    }
})

document.querySelector('#projects').addEventListener('click', (e) => {
    // // Remove project from UI
    if (e.target.classList.contains('delete-project')) {

        // Remove project from UI
        e.target.parentElement.parentElement.remove()
        // Remove project from store
        Store.removeProject(e.target.firstChild.nextElementSibling.value)

        // let taskList = document.getElementById('taskList').innerHTML = ''
    }
})








