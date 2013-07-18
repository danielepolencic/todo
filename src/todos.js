(function(App){

  'use strict';

  function Todos( sandbox ){
    this.sandbox = sandbox;
    this.sandbox.subscribe('add', this.add.bind(this));
    this.sandbox.subscribe('remove', this.remove.bind(this));
    this.todos = [];
    this.id = 0;
  }

  Todos.prototype.add = function( action ){

    if ( action.toString().trim() === '' ) { return; }

    var todo_raw = {
      id: this.id++,
      action: action
    };
    var todo = new App.Todo( this.sandbox, todo_raw);

    this.todos.push( todo );

    this.element.appendChild( todo.render() );
    return todo_raw;
  };

  Todos.prototype.length = function(){
    return this.todos.length;
  };

  Todos.prototype.remove = function( todo_id ){
    this.todos.some( function(todo, index){
      if( todo.attributes.id === todo_id ){
        this.todos.splice( index, 1 );
        todo.destroy();
        return true;
      }
      return false;
    }.bind(this));
  };

  Todos.prototype.destroy = function(){
    this.sandbox.unsubscribe('add', this.add.bind(this));
    this.sandbox.unsubscribe('remove', this.remove.bind(this));
    this.element.parentNode.removeChild(this.element);
  };

  Todos.prototype.render = function(){
    this.element = document.createElement('ul');
    return this.element;
  };

  App.Todos = Todos;

}).call(this, window.App || {});
