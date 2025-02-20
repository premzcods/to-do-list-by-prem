// Add task function
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear input
}

// Toggle task completion
function toggleComplete(span) {
    const li = span.parentElement;
    li.classList.toggle('completed');
}

// Delete task with animation
function deleteTask(button) {
    const li = button.parentElement;
    li.style.animation = 'slideOut 0.3s ease-in-out forwards';
    li.addEventListener('animationend', () => {
        li.remove();
    });
}

// Add task on Enter key press
document.getElementById('taskInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});