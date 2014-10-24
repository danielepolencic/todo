(function (TodoApp) {

  'use strict';

  function extend () {
    for (var i = 1; i < arguments.length; i++) {
      for (var key in arguments[i]) {
        if(arguments[i].hasOwnProperty(key)) {
          arguments[0][key] = arguments[i][key];
        }
      }
    }
    return arguments[0];
  }

  function Todo (attributes) {
    TodoApp.Observer.call(this);
    this._attributes = extend({action: 'no text'}, attributes);

    this._element = void 0;
    this._label = void 0;
    this._buttonDelete = void 0;

    this._onDelete = this._onDelete.bind(this);
  }

  Todo.prototype = Object.create(TodoApp.Observer.prototype, {
    constructor: {value: Todo}
  });

  Todo.prototype.render = function () {

    this._buttonDelete = document.createElement('input');
    this._buttonDelete.type = 'submit';
    this._buttonDelete.value = 'delete';
    this._buttonDelete.addEventListener('click', this._onDelete);

    this._label = document.createElement('span');
    this._label.innerHTML = this._attributes.action;

    this._element = document.createElement('li');
    this._element.appendChild(this._label);
    this._element.appendChild(this._buttonDelete);

    this.publish('todo:rendered', this._element, this._attributes);

    return this._element;
  };

  Todo.prototype._onDelete = function (event) {
    event.preventDefault();
    this.publish('todo:remove', this._element, this._attributes);
  };

  Todo.prototype.destroy = function () {
    this._buttonDelete.removeEventListener('click', this._onDelete);
    this.publish('todo:removed', this._elemen, this._attributes);
    return this._element;
  };

  TodoApp.Todo = Todo;

}).call(this, window.TodoApp || {});
