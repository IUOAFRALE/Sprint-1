export default class Store {
//     // Project
    static getProjects() {
        let projects
        if (localStorage.getItem('projects') === null) {
            projects = []
        } else {
            projects = JSON.parse(localStorage.getItem('projects'))
        }

        return projects
    }

    static addProject(project) {
        const projects = Store.getProjects()
        projects.push(project)
        localStorage.setItem('projects', JSON.stringify(projects))
    }

    static removeProject(projectID) {
        const projects = Store.getProjects()

        projects.forEach((project, index) => {
            if (project.id == projectID) {
                projects.splice(index, 1)
            }
        })

        localStorage.setItem('projects', JSON.stringify(projects))
    }

    static addTask(task, projectId) {
        const projects = Store.getProjects()
        projects.forEach(project => {
            if (project.id == projectId) {
                let tasks = project.Tasks
                tasks.push(task)
            }
        })
        localStorage.setItem('projects', JSON.stringify(projects))
    }
}
