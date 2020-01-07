document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskDesc = document.querySelector("#new-task-description");
  const tasksList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskLi = document.createElement("li");
    let txt  = taskDesc.value;
    // if
    taskLi.innerHTML = txt + '<button id="del">X</button>';
    tasksList.appendChild(taskLi);
    e.target.reset();

    let dBtn = document.querySelector("#del");
    dBtn.addEventListener("click", function(e) {
      e.currentTarget.parentNode.remove();
    });
  });

});
