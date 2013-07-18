(function(App){

  'use strict';

  var todo,
      observer;

  beforeEach(function(){
    observer = new App.Observer();
    todo = new App.Todo(observer, { action: 'my action', id: 1 });
  });

  describe('Todo item', function(){

    it('should be rendered', function(){
      todo.render();
    });

    it('should be destroyed', function(){
      var body = document.getElementsByTagName('body')[0];
      body.appendChild( todo.render() );
      todo.destroy();
    });

  });

}).call(this, window.App);
