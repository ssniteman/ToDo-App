var todoTemplate = _.template($('.todo-template').text())


$('.js-btn').click(function(){

	var userinput = $('.todo-input').val();

	var todo = {
	  userinput: userinput,
	  done: false,
	  id: _.uniqueId(),
	}

var renderedTemplate = todoTemplate(todo);

$('.todo-items').prepend(renderedTemplate)
})