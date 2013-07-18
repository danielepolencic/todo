(function(App){

  'use strict';

  function Count( sandbox ){
    this.total = 0;
    sandbox.subscribe('add', this.update.bind(this, false));
    sandbox.subscribe('remove', this.update.bind(this, true));
  }

  Count.prototype.update = function( isRemoved ){
    this.total += isRemoved ? -1 : +1;
    var items = this.total > 1 ? ' items ' : ' item ';
    this.element.innerHTML = this.total + items + 'in list.';
  };

  Count.prototype.render = function(){
    this.element = document.createElement('div');
    this.element.innerHTML = 'No actions.';
    return this.element;
  };

  Count.prototype.destroy = function(){
    this.element.parentNode.removeChild(this.element);
  };

  App.Count = Count;

}).call(this, window.App);
