var todoList = [
{
	userinput: 'Drink Wine',
	done: false,
	id: _.uniqueId('todo')
},
{
	userinput: 'Wash Shits',
	done: false,
	id: _.uniqueId('todo')
},
{
	userinput: 'Go To Da Bitch',
	done: false,
	id: _.uniqueId('todo')
}
]


var todoTemplate = _.template($('.todo-template').text())

// Adding pre objects to DOM

_.each(todoList, function(items){
  $('.todo-items').prepend(todoTemplate(items));
})

// Add button

$('.js-btn').click(function(){

	var userinput = $('.todo-input').val();

	var todo = {
	  userinput: userinput,
	  done: false,
	  id: _.uniqueId('todo'),
	}

var renderedTemplate = todoTemplate(todo);

console.log(todoTemplate(todo))

$('.todo-items').prepend(renderedTemplate)

// Add to the array

todoList.push(todo);

console.log("New Todo List", todoList)

})

// Remove button

$('.todo-items').on('click', '.removebtn', function(){
	
var parentId = $(this).parents('.todo-item').attr('id');

	console.log(parentId)

	

	todoList = _.reject(todoList, function(item){

	return item.id == parentId;

	})

	console.log(todoList)


	$(this).parents('.todo-item').remove(); 


})



