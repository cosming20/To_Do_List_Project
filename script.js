document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.getElementById('add-task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    addTaskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!taskInput.value.trim()) return;
  
      const newTask = document.createElement('li');
      newTask.innerHTML = `
        <span class="task-text">${taskInput.value}</span>
        <button class="remove-task-button">Remove</button>
      `;
  
      taskList.appendChild(newTask);
      taskInput.value = '';
  
      const removeTaskButtons = document.getElementsByClassName('remove-task-button');
      for (const button of removeTaskButtons) {
        button.addEventListener('click', () => {
          button.parentElement.remove();
        });
      }
    });
  });