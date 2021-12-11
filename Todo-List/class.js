// Task Class: Represents a Task
class Task {
    constructor(title, description, priority) {
        this.id = Date.now()
        this.title = title
        this.description = description
        this.priority = priority
        this.statue = 'Todo'
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayTasks() {
        const tasks = Store.getTasks()

        tasks.forEach((task) => UI.addTaskToList(task))
    }

    static addTaskToList(task) {
        const list = document.querySelector('#tasks')

        const row = document.createElement('tr')

        row.innerHTML = `
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td>${task.priority}</td>
        <td>${task.statue}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a>
        <input type="hidden" name="id" id="id" value="${task.id}">
        </td>`

        list.appendChild(row)
    }

    static deleteTask(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#task-form')
        container.insertBefore(div, form)

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

    static clearFields() {
        document.querySelector('#title').value = ''
        document.querySelector('#description').value = ''
        document.querySelector('#priority').value = ''
    }
}

// Store Class: Handles Storage
class Store {
    static getTasks() {
        let tasks
        if (localStorage.getItem('tasks') === null) {
            tasks = []
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }

        return tasks
    }

    static addTask(task) {
        const tasks = Store.getTasks()
        tasks.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    static removeTask(taskID) {
        const tasks = Store.getTasks()

        tasks.forEach((task, index) => {
            if (task.id == taskID) {
                tasks.splice(index, 1)
                console.log(task.id);
                console.log(index);
            }
            // console.log(task.id == taskID);
        })

        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
}

// Event: Display Tasks
document.addEventListener('DOMContentLoaded', UI.displayTasks)

// Event: Add a Task
document.querySelector('#task-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault()

    // Get form values
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const priority = document.querySelector('#priority').value

    // Validate
    if (title === '' || description === '' || priority === '') {
        UI.showAlert('Please fill in all fields', 'danger')
    } else {
        // Instantiate task
        const task = new Task(title, description, priority)

        // Add Task to UI
        UI.addTaskToList(task)

        // Add task to store
        Store.addTask(task)

        // Show success message
        UI.showAlert('Task Added', 'success')

        // Clear fields
        UI.clearFields()
    }
})

// Event: Remove a Task
document.querySelector('#tasks').addEventListener('click', (e) => {
    // Remove task from UI
    UI.deleteTask(e.target)

    // Remove task from store
    Store.removeTask(e.target.parentElement.lastChild.previousElementSibling.value)

    // Show success message
    UI.showAlert('Task Removed', 'success')
})
