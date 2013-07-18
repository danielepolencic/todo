(function(App){

  'use strict';

  function Add( sandbox ){
    this.sandbox = sandbox;
  }

  Add.prototype.render = function(){
    this.element = document.createElement('div');

    this.input = document.createElement('input');
    var submit = document.createElement('input');

    submit.type = 'submit';
    submit.value = 'Add';

    submit.addEventListener('click', this.onAdd.bind(this));

    this.element.appendChild( this.input );
    this.element.appendChild( submit );

    return this.element;

  };

  Add.prototype.onAdd = function(){
    if( this.input.value.trim() === "" ) { return; }
    this.sandbox.publish('add', this.input.value.trim());
    this.input.value = '';
  };

  App.Add = Add;

}).call(this, window.App || {});
