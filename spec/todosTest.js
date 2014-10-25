(function (TodoApp) {

  'use strict';

  var todos, sandbox;

  beforeEach(function () {
    sandbox = document.createElement('div');
    document.querySelector('body').appendChild(sandbox);
    todos = new TodoApp.Todos();
  });

  afterEach(function () {
    sandbox.parentNode.removeChild(sandbox);
  });

  describe('Todos', function () {

    describe('Todos.prototype.constructor', function () {});

    describe('Todos.prototype.add', function () {

      beforeEach(function () {
        sandbox.appendChild(todos.render());
      });

      it('should add a todo item', function () {
        var todoAdded = jasmine.createSpy('todo added');
        todos.subscribe('todos:added', todoAdded);

        expect(todos.add('item1')).toBe(true);
        expect(sandbox.querySelectorAll('li').length).toEqual(1);
        expect(todoAdded).toHaveBeenCalled();
      });

      it('should not add a todo item if the action is not valid', function () {
        expect(todos.add()).toBe(false);
        expect(todos.add(1)).toBe(false);
        expect(todos.add(' ')).toBe(false);
      });

      it('should listen for a remove event', function () {
        var todoRemoved = jasmine.createSpy('todo removed');
        todos.subscribe('todos:removed', todoRemoved)
        todos.subscribe('todos:added', function (todo, todoElement, todoAttributes) {
          todo.publish('todo:remove', todoElement, todoAttributes);
        });

        expect(todos.add('item2')).toBe(true);
        expect(sandbox.querySelectorAll('li').length).toEqual(0);
        expect(todoRemoved).toHaveBeenCalled();
      });

    });

    describe('Todos.prototype.render', function () {

      it('should render the element', function () {
        sandbox.appendChild(todos.render());
        expect(sandbox.childNodes.length).toEqual(1);
      });

    });

  });

}).call(this, window.TodoApp);
