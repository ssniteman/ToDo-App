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
 
+todoList.length;
$('.num').text(todoList.length);


});




// Remove button

$('.todo-items').on('click', '.removebtn', function(){
	
	var parentId = $(this).parents('.todo-item').attr('id');

	console.log(parentId)

	

	todoList = _.reject(todoList, function(item){

	return item.id == parentId;

	})

	console.log(todoList)


	$(this).parents('.todo-item').remove(); 

	-todoList.length;
	$('.num').text(todoList.length);


})

// Complete button

// $('.todo-items').on('click', '.completebtn', function(){

// 	$(this).parents('.description').toggleClass('.done');

// });






// Edit button



$('.todo-items').on('click', '.editbtn', function(){

console.log("edit button clicked")

$(this).parent().siblings('.edit-input').show();


});





// $('.js-todo-items').on('blur', '.edit-input', function(){
// var parentId = $(this).parents('.todo-item').attr('id');
// var newDescription = $(this).val();
// var item = _.findWhere(todoArray, {id: parentId});

// item.description = newDescription

// $(this).siblings('.userinput').empty().html(newDescription)
// $(this).hide()
// });





// Hacking edit button

$('.todo-items').on('click', '.edit-btn', function(){

	$('edit-input').addClass('.edit-appear')


});





