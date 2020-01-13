// let li = document.createElement('li')
// let ulInput = document.getElementById('tasks')
// let actualInput = document.getElementById('new-task-description').value


// function addText (str) {
//   li.innerHTML = str
//   ulInput.appendChild(li)
// }


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener("submit", function(event) {
    event.preventDefault();
    function addText (str) {
      li.innerHTML = str
      ulInput.appendChild(li)
    }
    let li = document.createElement('li')
    let ulInput = document.getElementById('tasks')
    let actualInput = document.getElementById('new-task-description').value;
    addText(actualInput);
  });
});





// document.getElementById('create-task-form').addEventListener("submit", function(event) {
//   event.preventDefault();
// }, false)
