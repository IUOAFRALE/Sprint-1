import Store from './Store.js';

// // UI Class: Handle UI
export default class UI {

    //     // Project
    static displayProjects() {

        const projects = Store.getProjects()

        projects.forEach((project) => {
            UI.addProjectToList(project)
            // project.Tasks.forEach((task) => UI.addTaskToList(task))
        })
    }

    static addProjectToList(project) {
        const projectsList = document.querySelector('#projects')

        const li = document.createElement('li')
        li.className = 'nav-item rounded py-2 px-1 my-1 project d-flex'

        li.innerHTML = `
        <i class="fas fa-project-diagram p-2"></i> 
        <span class="project-name">${project.title}</span>
        <input type="hidden" name="id" id="id" value="${project.id}">
        <div class="ms-auto"> 
            <button class="btn-sm btn-light">
                <i class="fas fa-pencil-alt"></i></button><button class="btn-sm btn-danger ms-1 delete-project">
                <input type="hidden" name="id" id="id" value="${project.id}">
                <i class="far fa-trash-alt"></i>
            </button> 
        </div>`

        projectsList.appendChild(li)
    }

    // Task
    static displayTasks(projectID) {

        const projects = Store.getProjects()

        projects.forEach(project => {
            if (project.id == projectID) {
                project.Tasks.forEach(task => {

                    const tasksList = document.getElementById('tasks-list')

                    // tasksList.innerHTML = '' 

                    tasksList.innerHTML += `
                    <li class="rounded p-3 pt-4 m-2 d-flex task fs-5 ${task.priority}" data-bs-toggle="collapse" href="#multiCollapseExample${task.id + 1}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <i class="fas fa-tasks text-dark p-2"></i>
                        ${task.title} 
                        <div class="ms-auto"> 
                            <button class="btn btn-secondary">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="btn btn-danger ms-1">
                                <i class="far fa-trash-alt"></i>
                            </button> 
                        </div>
                    </li>
                    <div class="row">
                        <div class="col">
                          <div class="collapse multi-collapse" id="multiCollapseExample${task.id + 1}">
                            <div class="card card-body description p-4">
                              ${task.description}
                            </div>
                          </div>
                        </div>
                    </div>`
                });
            }
        });
    }

    static displayAllTasks() {

        const projects = Store.getProjects()

        projects.forEach(project => {
            const tasksList = document.getElementById('tasks-list')
            project.Tasks.forEach(task => {
                tasksList.innerHTML += `
                    <li class="rounded p-3 pt-4 m-2 d-flex task fs-5 ${task.priority}" data-bs-toggle="collapse" href="#multiCollapseExample${task.id + 1}" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <i class="fas fa-tasks text-dark p-2"></i>
                        ${task.title} 
                        <div class="ms-auto"> 
                            <button class="btn btn-secondary">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="btn btn-danger ms-1">
                                <i class="far fa-trash-alt"></i>
                            </button> 
                        </div>
                    </li>
                    <div class="row">
                        <div class="col">
                          <div class="collapse multi-collapse" id="multiCollapseExample${task.id + 1}">
                            <div class="card card-body description p-4">
                              ${task.description}
                            </div>
                          </div>
                        </div>
                    </div>`
            })
        })
    }


    static addTaskToList(projectID) {

        const projects = Store.getProjects()

        projects.forEach(project => {
            if (project.id == projectID) {
                project.Tasks.forEach(task => {

                });
            }
        });
    }

    // static addTaskToList(task) {
    //     const tasksList = document.querySelector('#tasks')

    //     const taskRow = document.createElement('tr')

    //     taskRow.innerHTML = `
    //     <td>${task.title}</td>
    //     <td>${task.description}</td>
    //     <td>${task.priority}</td>
    //     <td>${task.statue}</td>
    //     <td><a href="#" class="btn btn-danger btn-sm delete-task">X</a>
    //     <input type="hidden" name="id" id="id" value="${task.id}">
    //     </td>`

    //     tasksList.appendChild(taskRow)
    // }


    static deleteProject(el) {
        if (el.classList.contains('delete-project')) {
            el.parentElement.parentElement.remove()
        }
    }

    // static showAlert(message, className) {
    //     const div = document.createElement('div')
    //     div.className = `alert alert-${className}`
    //     div.appendChild(document.createTextNode(message))
    //     const container = document.querySelector('.project-container')
    //     const form = document.querySelector('#project-form')
    //     container.insertBefore(div, form)

    //     setTimeout(() => document.querySelector('.alert').remove(), 3000)
    // }

    static clearFields() {
        document.querySelector('#project-title').value = ''
    }
}

