var todoList=[{userinput:"Feed Dog",done:!1,id:_.uniqueId("todo")},{userinput:"Finish Taxes",done:!1,id:_.uniqueId("todo")},{userinput:"Wash Clothes",done:!1,id:_.uniqueId("todo")}],todoTemplate=_.template($(".todo-template").text());_.each(todoList,function(a){$(".todo-items").prepend(todoTemplate(a))}),$(".js-btn").click(function(){var a=$(".todo-input").val(),b={userinput:a,done:!1,id:_.uniqueId("todo")},c=todoTemplate(b);console.log(todoTemplate(b)),$(".todo-items").prepend(c),todoList.push(b),console.log("New Todo List",todoList),$(".num").text(todoList.length)}),$(".todo-items").on("click",".removebtn",function(){var a=$(this).parents(".todo-item").attr("id");console.log(a),todoList=_.reject(todoList,function(b){return b.id==a}),console.log(todoList),$(this).parents(".todo-item").remove(),$(".num").text(todoList.length)}),$(".todo-items").on("click",".completebtn",function(){$(this).parent().siblings(".description").toggleClass("completed"),console.log("completed occurred");var a=$(this).parents(".todo-item").attr("id");console.log(a);var b=_.findWhere(todoList,{id:a}),c=!b.done;b.done=c,console.log(b.done);var d=_.where(todoList,{done:!0});console.log(d),$(".num-two").text(d.length)}),$(".todo-items").on("click",".editbtn",function(){console.log("edit button clicked"),$(this).parent().siblings(".edit-input").show(),$(this).parent().siblings(".edit-input").focus()}),$(".todo-items").on("blur",".edit-input",function(){var a=$(this).parent().attr("id"),b=$(this).val(),c=_.findWhere(todoList,{id:a});c.userinput=b,$(this).siblings(".description").empty().html(b),$(this).hide()});