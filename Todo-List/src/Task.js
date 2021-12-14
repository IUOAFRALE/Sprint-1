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
document.getElementById('projects').addEventListener('click', (e) => {

    if (e.target.classList.contains('project-name')) {

        location.reload()
        // store selected project id
        localStorage.setItem('activeProjectId', e.target.nextElementSibling.value)

        // display tasks in Ui
        UI.displayTasks()

    }
})

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('activeProjectId')) {
        UI.displayTasks()
    }
})

// // Event: Add a Task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title = document.querySelector('#task-title').value
    const description = document.querySelector('#task-description').value
    const priority = document.querySelector('input[name="priority"]:checked').value



    // Validate
    if (title === '' || description === '' || priority === '') {
        UI.showAlert('Please fill in all fields', 'danger')
    } else {
        // Instantiate task
        const task = new Task(title, description, priority)
        const projectId = localStorage.getItem('activeProjectId')

        // Add task to store
        Store.addTask(task, projectId)

        // Add Task to UI
        UI.displayTasks(task)

        UI.clearTaskFields()

        location.reload()
    }
})

// delete task
document.querySelector('#tasks-list').addEventListener('click', (e) => {
    // // Remove project from UI
    if (e.target.classList.contains('delete-task')) {

        // // Remove task from UI
        e.target.parentElement.parentElement.parentElement.nextElementSibling.remove()
        e.target.parentElement.parentElement.parentElement.remove()

        // Remove task from store
        Store.removeTasks(e.target.nextElementSibling.value)
    }
})


// update task
document.querySelector('#tasks-list').addEventListener('click', (e) => {
    // // Remove project from UI
    if ((e.target.tagName == 'BUTTON' && e.target.classList.contains('update-task')) || e.target.classList.contains('update-task')) {
        // display update task form
        document.querySelector('.update-task-form').style.display = 'block'

        const projects = Store.getProjects()
        projects.forEach((project) => {
            if (project.id == localStorage.getItem('activeProjectId')) {

                project.Tasks.forEach((task, index) => {
                    if (task.id == e.target.nextElementSibling.value) {

                        document.querySelector('#update-task-title').value = task.title
                        document.querySelector('#update-task-description').value = task.description
                        const priority = document.querySelectorAll('input[name="update-task-priority"]')
                        priority.forEach((p) => {
                            if (p.value == task.priority) p.checked = true
                        })

                        document.querySelector('#update-task-form').addEventListener('submit', (e) => {
                            // Prevent actual submit
                            e.preventDefault()

                            // Get form values
                            const newTitle = document.querySelector('#update-task-title').value
                            const newDescription = document.querySelector('#update-task-description').value
                            const newPriority = document.querySelector('input[name="update-task-priority"]:checked').value

                            // Validate
                            if (newTitle === '' || newDescription === '' || newPriority === '') {
                                UI.showAlert('Please fill in all fields', 'danger')
                            } else {
                                // Instantiate task
                                const task = new Task(newTitle, newDescription, newPriority)
                                project.Tasks[index] = task
                                localStorage.setItem('projects', JSON.stringify(projects))
                                // location.reload()
                                console.log(task)
                            }
                        })

                    }
                })
            }
        })
    }
})
