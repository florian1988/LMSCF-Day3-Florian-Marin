function generateTasks() {

	/* Reset inputs in new task form */
	$('#tasktext').val('');
	$('#taskmonth').val('1')
	$('#taskday').val('1');
	$('#taskyear').val('');

	/* Set the new task form to hidden */
	$('#createnewtask').hide();

	/* Reset task list */
	let taskdate = '';
	$('#mytasks').replaceWith(`<div id="mytasks"></div>`);

	/* Generate todo list from JSON data */
	for (let i in tododata.tasks) {

		if (tododata.tasks[i].done == 'false') {
			taskdate = moment(tododata.tasks[i].due).format('MMM Do');

			$('#mytasks').append(`
				<div class="taskcard" id="c${tododata.tasks[i].id}">
					<div class="taskstatus">
						<input type="checkbox" name="t${tododata.tasks[i].id}" id="t${tododata.tasks[i].id}" value="done" class="taskcheckbox">
					</div>
					<div class="taskdate">
						${taskdate}
					</div>
					<div class="taskbody">
						${tododata.tasks[i].name}
					</div>
				</div>
				`)
		}
	}

	$('.taskcheckbox').change(function(){
		let tempID = (this.id);
		tempID = tempID.substring(1);
		let cardID = '#c' + tempID;
		console.log(cardID);
		let itemIndex = tododata.tasks.findIndex((obj => obj.id == tempID));
		tododata.tasks[itemIndex].done = 'true';
		$(cardID).slideUp(1000);
	});
};

$('#newtaskbutton').click(createnewtask);

$('#savetask').click(function(event) {
	event.preventDefault();

	let newTaskID = parseInt(tododata.tasks.length) + 1;
	console.log(newTaskID);
	let newTaskDate = $('#taskmonth').val() + '/' + $('#taskday').val() + '/' + $('#taskyear').val();
	let taskText = $('#tasktext').val();
	console.log(newTaskDate);
	let newTaskObject = {
		"id": newTaskID,
		"name": taskText,
		"due": newTaskDate,
		"done": "false"
	};
	tododata.tasks.push(newTaskObject);
	console.log(tododata.tasks);
	$('#createnewtask').hide(500);
	generateTasks();
	
});

function createnewtask() {
	$('#createnewtask').show(1000);

}
