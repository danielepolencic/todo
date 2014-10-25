(function (TodoApp) {

  'use strict';

  describe('Counter', function () {
    var sandbox, counter;

    beforeEach(function () {
      sandbox = document.createElement('div');
      document.querySelector('body').appendChild(sandbox);
      counter = new TodoApp.Counter();
    });

    afterEach(function () {
      sandbox.parentNode.removeChild(sandbox);
    });

    describe('Counter.prototype.constructor', function () {});

    describe('Counter.prototype.increment', function () {

      beforeEach(function () {
        sandbox.appendChild(counter.render());
      });

      it('should add one to the total', function () {
        expect(counter.increment()).toEqual(1);
        expect(sandbox.querySelector('div').innerHTML).toEqual('1 item in list.');
      });

      it('should add few to the total', function () {
        expect(counter.increment()).toEqual(1);
        expect(counter.increment()).toEqual(2);
        expect(sandbox.querySelector('div').innerHTML).toEqual('2 items in list.');
      });

    });

    describe('Counter.prototype.decrement', function () {

      beforeEach(function () {
        sandbox.appendChild(counter.render());
      });

      it('should remove an element from the total', function () {
        counter.increment();
        counter.increment();

        expect(counter.decrement()).toEqual(1);
        expect(sandbox.querySelector('div').innerHTML).toEqual('1 item in list.');
      });

    });

    describe('Counter.prototype.render', function () {

      it('should render the element', function () {
        sandbox.appendChild(counter.render());

        expect(sandbox.childNodes.length).toEqual(1);
      });

    });

  });

}).call(this, window.TodoApp);
