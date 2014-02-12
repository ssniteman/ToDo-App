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

$('.todo-items').prepend(renderedTemplate)
})

// Remove button

$('.todo-items').on('click', '.removebtn', function(){
	
	

	$(this).parents('.todo-item').remove(); 


})





// var parentId = $(this).parent().attr('id').split('-')[1];

// 	todoList = _.reject(todoList, function(item){ 
//       return item.id == parentId;
//     })
