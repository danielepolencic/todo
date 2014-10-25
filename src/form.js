(function (TodoApp) {

  'use strict';

  function Form () {
    TodoApp.Observer.call(this);

    this._element = void 0;
    this._input = void 0;
    this._submit = void 0;
  }

  Form.prototype = Object.create(TodoApp.Observer.prototype, {
    constructor: {value: Form}
  });

  Form.prototype.render = function () {
    this._input = document.createElement('input');
    this._input.type = 'text';

    this._submit = document.createElement('input');
    this._submit.type = 'submit';
    this._submit.value = 'Add';
    this._submit.addEventListener('click', this._onSubmit.bind(this));

    this._element = document.createElement('div');
    this._element.appendChild(this._input);
    this._element.appendChild(this._submit);

    return this._element;
  };

  Form.prototype._onSubmit = function () {
    if (this._input.value.trim() === '') return;
    this.publish('form:submit', this._input.value);
    this._input.value = '';
  };

  TodoApp.Form = Form;

}).call(this, window.TodoApp || {});
