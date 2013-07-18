(function(){

  'use strict';

  function Main(){
    this.observer = new App.Observer();
    this.count = new App.Count( this.observer );
    this.todos = new App.Todos( this.observer );
    this.add = new App.Add( this.observer );
  }

  Main.prototype.render = function(){
    this.element = document.createElement('div');
    this.element.appendChild( this.add.render() );
    this.element.appendChild( this.todos.render() );
    this.element.appendChild( this.count.render() );
    return this.element;
  };

  var myapp = new Main();
  var container = document.getElementById('container');
  container.appendChild( myapp.render() );

}).call(this);
