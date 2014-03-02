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
];


var todoTemplate = _.template($('.todo-template').text());


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


});

// Complete button

// $('.todo-items').on('click', '.completebtn', function(){

// 	$(this).parents('.description').toggleClass('.done');

// });

//  $('.todo-items').on('click','.completebtn', function(){
//     $(this).parent().toggleClass('complete-item');

//     var parentId = $(this).parent().attr('id').split('-')[1];
    
//     _.each(todoList, function(item,index){
//       if(item.id == parentId) {
//         item.done = true;
//       }
//     });
// });


// completed task code

	$('.todo-items').on('click', '.completebtn', function(){

		$(this).parent().siblings('.description').toggleClass('completed');

		console.log('completed occurred')
		

		// var parentId = $(this).parent('.new-task-item').attr('id');

		// var items = _.findWhere(taskList, {id: parentId});


		// items.done =!items.done;

		// changeDone = items.done;

		// $(this).siblings().removeClass('false','true')
		// $(this).siblings().addClass(changeDone.toString())

		// console.log(taskList)
	});






// Edit button



$('.todo-items').on('click', '.editbtn', function(){

console.log("edit button clicked")

$(this).parent().siblings('.edit-input').show();


});

// Different way of doing edit btn

$('.todo-items').on('click', '.editbtn',function() {

		var parentId = $(this).parent('.todo-item').attr('id');

		var items = _.findWhere(todoList, {id: parentId});



		var inputbox = "<input type='text'  class='inputbox' placeholder='type update here' value=\""+$(this).text()+"\">";

		$(this).siblings('.task-text').html(inputbox);

		$("input.inputbox").focus();

		$("input.inputbox").blur(function(){
			$(this).siblings().text($('.inputbox').val());

			console.log(items)

		})	

	})







