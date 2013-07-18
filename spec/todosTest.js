(function(App){

  'use strict';

  var body,
      todos,
      observer;

  beforeEach(function(){
    body = document.getElementsByTagName('body')[0];
    observer = new App.Observer();
    todos = new App.Todos(observer);
    body.appendChild( todos.render() );
  });

  afterEach(function(){
    todos.destroy();
  });

  describe('Todo list', function(){

    it('should add an item', function(){
      todos.add('test action');
      expect(todos.length()).toBe(1);
    });

    it('should remove an item', function(){
      var todo = todos.add('test action');
      todos.remove( todo.id );
      expect(todos.length()).toBe(0);
    });

  });

}).call(this, window.App);
