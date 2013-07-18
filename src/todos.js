(function(App){

  'use strict';

  function Todos( sandbox ){
    sandbox.subscribe('add', this.add.bind(this));
    sandbox.subscribe('remove', this.remove.bind(this));
    this.todos = [];
    this.id = 0;
    this.sandbox = sandbox;
  }

  Todos.prototype.add = function( action ){
    action += '';
    if ( action.trim() === '' ) { return; }

    var todo = new App.Todo( this.sandbox, {
      id: this.id++,
      action: action
    });

    this.todos.push( todo );

    this.element.appendChild( todo.render() );
  };

  Todos.prototype.remove = function( todo_id ){
    this.todos.some( function(todo, index){
      var isMatching = todo.attributes.id === todo_id;
      if( isMatching ){
        this.todos.splice( index, 1 );
        todo.remove();
      }
      return isMatching;
    }.bind(this));
  };

  Todos.prototype.render = function(){
    this.element = document.createElement('ul');
    return this.element;
  };

  App.Todos = Todos;

}).call(this, window.App || {});
