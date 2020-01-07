document.addEventListener("DOMContentLoaded", () => {
	const task = document.getElementsByTagName('input');
	task[1].addEventListener('click', function(event){
		let tasklist = document.getElementById('tasks')
		let task = document.createElement('li');
		task.innerHTML = document.getElementById('new-task-description').value;
		tasklist.appendChild(task)
		event.preventDefault();
	}, false)
});