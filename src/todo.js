(function(){

  function Todo( sandbox, attributes ){
    this.sandbox = sandbox;
    this.attributes = attributes;
  };

  Todo.prototype.render = function(){

    this.element = document.createElement('li');
    this.btn_delete = document.createElement('input');
    var label = document.createElement('span');

    this.btn_delete.type = 'submit';
    this.btn_delete.value = 'delete';

    label.innerHTML = this.attributes.action;

    this.btn_delete.addEventListener('click', this.onDelete.bind(this));

    this.element.appendChild( label );
    this.element.appendChild( this.btn_delete );

    return this.element;
  };

  Todo.prototype.onDelete = function(){
    this.sandbox.publish('remove', this.attributes);
    this.remove();
  };

  Todo.prototype.remove = function(){
    this.btn_delete.removeEventListener('click', this.onDelete.bind(this));
    this.element.parentNode.removeChild(this.element);
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Todo;
    }
    exports.Todo = Todo;
  } else {
    this.Todo = Todo;
  }

}).call(this);
