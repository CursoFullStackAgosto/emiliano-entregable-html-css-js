const inputTask = document.getElementById(`toDo-input`);
const buttonAddTask = document.getElementById(`add-task`);
const todoList = document.getElementById(`todo-list`);

const createTask = () => {
  if (
    inputTask.value.length === 0 ||
    inputTask.value === "" ||
    inputTask.value.trim() === ""
  ) {
    return alert(`You must write a task`);
  }
  const liElement = document.createElement(`li`);
  liElement.innerHTML = `
    <div class="taskContainer">
    <input type="checkbox"/>
    <span class="taskText">${inputTask.value}</span>
    <i class="fa-solid fa-trash deleteButton"></i>
    </div>
    `;

  todoList.appendChild(liElement);
  inputTask.value = "";

  const checkbox = liElement.querySelector("input[type='checkbox']");
  checkbox.addEventListener("change", () => {
    const taskText = liElement.querySelector("span");
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    taskText.style.color = checkbox.checked ? "green" : "red";
    taskText.style.textDecorationThickness = checkbox.checked ? "2px" : "1px";
    taskText.style.fontStyle = checkbox.checked ? "italic" : "normal";
  });

  const completeTask = liElement.querySelector("span");
  completeTask.addEventListener("click", () => {
    const taskText = liElement.querySelector("span");
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "green";
    taskText.style.textDecorationThickness = "2px";
    taskText.style.fontStyle = "italic";
  });


  const deleteButton = liElement.querySelector(".deleteButton");
  deleteButton.addEventListener("click", () => {
    todoList.removeChild(liElement);
  });
};

buttonAddTask.addEventListener("click", createTask);
