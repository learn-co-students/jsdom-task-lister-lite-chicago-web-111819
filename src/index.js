document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskDesc = document.querySelector("#new-task-description");
  const tasksList = document.querySelector("#tasks");
  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskLi = document.createElement("li");
    let txt  = taskDesc.value;

    // Prevent saving empty TODO
    if (txt && txt.trim().length) {
      taskLi.innerHTML = txt + '<button class="btn-delete">X</button>';
      tasksList.appendChild(taskLi);
      e.target.reset();
    }

    // Deleting TODOs
    let deleteButtons = document.querySelectorAll(".btn-delete");
    if (deleteButtons.length > 0) {
      deleteButtons.forEach((item) => item.addEventListener("click", () => {
        let li = item.parentNode;
        if (li !== null) {
          let liParent = li.parentNode;
          liParent.removeChild(li);
        }
      }));
    }
  });

});
