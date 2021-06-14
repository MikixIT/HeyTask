
const taskInput = document.querySelector('#input');
const buttonInput = document.querySelector('#button-input');
const taskList = document.querySelector('#task-list');

buttonInput.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);

function addTask(e){
    if (taskInput.value === "") {
    alert('You have entered an empty task, enter the text!')    
    } 

    //Create <li> Item in HTML
    
    const li = document.createElement('li');
    li.className = 'task';

    //Create with textnode value html from taskInput
    li.appendChild(document.createTextNode(taskInput.value));

    //adding link <a>
    const link = document.createElement('a');

    //adding class to a element 
    link.className = 'delete-task';

    //adding ❌ to a element
    link.innerHTML = '<h4> ❌ <h4/>';


    //adding link into li
    li.appendChild(link);

    //adding li into ul html document
    taskList.appendChild(li);
    
    taskInput.value = ''

    e.preventDefault()
};

//Remove Task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-task')) {
        e.target.parentElement.parentElement.remove()
    }
}
