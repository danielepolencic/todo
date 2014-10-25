(function (TodoApp) {

  'use strict';

  function isString (anything) {
    return Object.prototype.toString.call(anything) === '[object String]';
  }

  function isNumber (anything) {
    return Object.prototype.toString.call(anything) === '[object Number]';
  }

  function Todos () {
    TodoApp.Observer.call(this);

    this._element = void 0;
    this._id = 0;
  }

  Todos.prototype = Object.create(TodoApp.Observer.prototype, {
    constructor: {value: Todos}
  });

  Todos.prototype.add = function (action) {
    if (!isString(action) || action.trim() === '') return false;

    var todoAttributes = {action: action};
    var todo = new TodoApp.Todo(todoAttributes);

    todo.subscribe('todo:remove', this._remove.bind(this, todo));

    var todoElement = todo.render();
    this._element.appendChild(todoElement);
    this.publish('todos:added', todo, todoElement, todoAttributes);
    return true;
  };

  Todos.prototype._remove = function (todo, todoElement, todoAttributes) {
    todo.destroy();
    this._element.removeChild(todoElement);

    this.publish('todos:removed', todo, todoElement, todoAttributes)
    return true;
  };

  Todos.prototype.render = function () {
    this._element = document.createElement('ul');
    return this._element;
  };

  TodoApp.Todos = Todos;

}).call(this, window.TodoApp || {});
