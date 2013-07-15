(function(){

  function Count( sandbox ){
    this.total = 0;
    sandbox.subscribe('add', this.update.bind(this, false));
    sandbox.subscribe('remove', this.update.bind(this, true));
  }

  Count.prototype.update = function( isRemoved ){
    isRemoved ? this.total-- : this.total++;
    var items = this.total > 1 ? ' items ' : ' item ';
    this.element.innerHTML = this.total + items + 'in list.';
  }

  Count.prototype.render = function(){
    this.element = document.createElement('div');
    this.element.innerHTML = 'No actions.';
    return this.element;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Count;
    }
    exports.Count = Count;
  } else {
    this.Count = Count;
  }

}).call(this);
