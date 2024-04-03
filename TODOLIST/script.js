// Load tasks from local storage when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        document.getElementById('taskList').innerHTML = savedTasks;
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Remove</button>
        `;
        taskList.appendChild(li);

        // Save tasks to local storage
        localStorage.setItem('tasks', taskList.innerHTML);

        taskInput.value = '';
    }
}

function removeTask(btn) {
    const taskList = document.getElementById('taskList');
    const li = btn.parentNode;
    taskList.removeChild(li);

    // Save tasks to local storage
    localStorage.setItem('tasks', taskList.innerHTML);
}
