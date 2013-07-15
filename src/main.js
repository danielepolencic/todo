(function(){

  function App(){
    this.observer = new Observer();

    this.count = new Count( this.observer )
    this.todos = new Todos( this.observer )
    this.add = new Add( this.observer )
  }

  App.prototype.render = function(){
    this.element = document.createElement('div');
    this.element.appendChild( this.add.render() )
    this.element.appendChild( this.todos.render() )
    this.element.appendChild( this.count.render() )
    return this.element;
  }

  var myapp = new App();
  var container = document.getElementById('container');
  container.appendChild( myapp.render() );

}).call(this);
