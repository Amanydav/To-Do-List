function addTodo() {
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todo-list');
  
    if (newTodoInput.value.trim() === '') {
      alert('Please enter a task.');
      return;
    }
  
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
  
    const todoText = document.createElement('span');
    todoText.textContent = newTodoInput.value;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      todoList.removeChild(todoItem);
    };
  
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
  
    todoList.appendChild(todoItem);
  
    newTodoInput.value = '';
  }
  