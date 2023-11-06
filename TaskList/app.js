const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  checkButton.classList.add("checkTask");
  // checkButton.style.backgroundColor = 'white'
  // checkButton.style.color = 'orange '
  // checkButton.style.fontSize = '1.2rem'
  // checkButton.style.border = " 2px solid orange "
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  deleteButton.classList.add("deleteTask");
  // deleteButton.style.backgroundColor = "white"
  // deleteButton.style.color = "red"
  // deleteButton.style.border = " 2px solid red"
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("please enter valid text");
  } else {
    taskContainer.appendChild(task);
  }

  // this  event is for line cutting
  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove(); // traversing twice from child to grand parent
  });
});
