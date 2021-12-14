$(document).ready(function()
{

    $(".new-task").click(function()
    {

        $(".task-form").show(300);

    });

    $(".close-task-form").click(function()
    {

        $(".task-form").hide(300);

    });


    // $(".update-task-form").click(function()
    // {

    //     // $(".update-task-form").show(300);
    //     console.log('object')

    // });

    // $(".close-update-task-form").click(function()
    // {

    //     $(".update-task-form").hide(300);

    // });

});


// updateTaskForm = document.getElementById('update-task-form')

// // Event: Display Tasks
// document.getElementById('update-task-form').addEventListener('click', (e) => {

//     if (e.target.classList.contains('project-name')) {

//         location.reload()
//         // store selected project id
//         localStorage.setItem('activeProjectId', e.target.nextElementSibling.value)

//         // display tasks in Ui
//         UI.displayTasks()

//     }
// })