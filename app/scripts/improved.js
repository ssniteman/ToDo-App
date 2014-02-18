var fakeModel = {
  userinput: 'Feed the Dog',
  completed: false,
  id: _.uniqueId('id')
}
 
var Todo = Backbone.Model.extend();
 
var TodoView = Backbone.View.extend({
 
  className: 'todo-item',

  renderTemplate: _.template($('.todo-template').text()),
 
  events: {
    "click .completebtn": "toggleDone",
    "click .removebtn": "remove",
    "click .addbtn": "addNew",
  },
 
  initialize: function(){
    console.log('hey buddy');
    $('.todo-items').prepend( this.el )
    this.render()
 
    this.listenTo(this.model, 'change', this.render)
  },
 
  render: function(){
    this.$el.html(this.renderTemplate(this.model.attributes))
  },
 
  toggleDone: function(){
    this.model.set('completed', !this.model.get('completed'))
  },

  addNew: function(){
    this.$el.prepend('.todo-items'.el);

    $('.todo-items').prepend( this.el )

  }
 
})

var modelInstance = new Todo(fakeModel)

var view = new TodoView( { model: modelInstance } )




