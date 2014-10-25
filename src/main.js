(function (TodoApp) {

  'use strict';

  var todos = new TodoApp.Todos();
  var form = new TodoApp.Form();
  var counter = new TodoApp.Counter();

  form.subscribe('form:submit', todos.add.bind(todos));
  todos.subscribe('todos:added', counter.increment.bind(counter));
  todos.subscribe('todos:removed', counter.decrement.bind(counter));

  var container = document.querySelector('body');
  container.appendChild(form.render());
  container.appendChild(todos.render());
  container.appendChild(counter.render());

}).call(this, window.TodoApp);
