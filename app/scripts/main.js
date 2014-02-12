var todoList = [
{
	userinput: 'Drink Wine',
	done: false,
	id: _.uniqueId()
},
{
	userinput: 'Wash Shits',
	done: false,
	id: _.uniqueId()
},
{
	userinput: 'Go To Da Bitch',
	done: false,
	id: _.uniqueId()
}
]


var todoTemplate = _.template($('.todo-template').text())

_.each(todoList, function(items){
  $('.todo-items').prepend(todoTemplate(items));
})

// Add button

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

// Remove button

$('.todo-items').on('click', ".removebtn", function(){

var 

}





