(function(){

  function Todos( sandbox ){
    sandbox.subscribe('add', this.add.bind(this));
    sandbox.subscribe('remove', this.remove.bind(this));
    this.todos = [];
    this.id = 0;
    this.sandbox = sandbox;
  };

  Todos.prototype.add = function( action ){
    action += '';
    if ( action.trim() === '' ) return;

    var todo = new Todo( this.sandbox, {
      id: this.id++,
      action: action
    });

    this.todos.push( todo );

    this.element.appendChild( todo.render() );
  };

  Todos.prototype.remove = function( todo_id ){
    this.todos.some( function(todo, index){
      if( isMatching = todo.attributes.id === todo_id ){
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

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Todos;
    }
    exports.Todos = Todos;
  } else {
    this.Todos = Todos;
  }

}).call(this);
