(function (TodoApp) {

  'use strict';

  function Counter () {
    this._element = void 0;
    this._total = 0;
  }

  Counter.prototype.increment = function () {
    this._total += 1;
    this._update();
    return this._total;
  };

  Counter.prototype.decrement = function () {
    this._total -= 1;
    this._update();
    return this._total;
  };

  Counter.prototype._update = function () {
    var items = this._total > 1 ? ' items ' : ' item ';
    this._element.innerHTML = this._total + items + 'in list.';
  };

  Counter.prototype.render = function () {
    this._element = document.createElement('div');
    this._element.innerHTML = 'No actions.';
    return this._element;
  };

  TodoApp.Counter = Counter;

}).call(this, window.TodoApp);
