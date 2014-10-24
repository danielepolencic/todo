(function (TodoApp) {

  'use strict';

  var todo, sandbox;

  beforeEach(function () {
    sandbox = document.createElement('div');
    document.querySelector('body').appendChild(sandbox);
    todo = new TodoApp.Todo({action: 'my action', id: 1});
  });

  afterEach(function () {
    sandbox.parentNode.removeChild(sandbox);
  });

  describe('Todo', function(){

    describe('Todo.prototype.constructor', function () {

      it('should accept a list of attributes', function () {
        var todo = new TodoApp.Todo({action: 'test-abc'});
        expect(todo.render().querySelector('span').innerHTML).toEqual('test-abc');
      });

    });

    describe('Todo.prototype.render', function () {

      it('should render the template', function () {
        var listener = jasmine.createSpy('todo added');
        todo.subscribe('todo:rendered', listener);
        var element = todo.render();
        sandbox.appendChild(element);

        expect(element).toEqual(sandbox.childNodes[0]);
        expect(listener).toHaveBeenCalled();
      });

      it('should attach an event to the delete button', function () {
        var listener = jasmine.createSpy('delete button clicked');
        todo.subscribe('todo:remove', listener);
        sandbox.appendChild(todo.render());
        sandbox.querySelector('input').click();

        expect(listener).toHaveBeenCalled();
      });

    });

    describe('Todo.prototype.destroy', function () {

      it('should destroy the item', function () {
        sandbox.appendChild(todo.render());
        var element = todo.destroy();

        expect(element).toEqual(sandbox.childNodes[0]);

        sandbox.removeChild(element);

        expect(sandbox.childNodes.length).toEqual(0);
      });

      it('should detach the event from the delete button', function () {
        var listener = jasmine.createSpy('click');
        sandbox.appendChild(todo.render());
        todo.destroy();
        todo.subscribe('todo:remove', listener);
        sandbox.querySelector('input').click();

        expect(listener).not.toHaveBeenCalled();
      });

    });

  });

}).call(this, window.TodoApp);
