(function (TodoApp) {

  'use strict';

  describe('Form', function () {
    var form, sandbox;

    beforeEach(function () {
      sandbox = document.createElement('div');
      document.querySelector('body').appendChild(sandbox);
      form = new TodoApp.Form();
    });

    afterEach(function () {
      sandbox.parentNode.removeChild(sandbox);
    });

    describe('Form.prototype.constructor', function () {});

    describe('Form.prototye.render', function () {

      it('should render the form', function () {
        sandbox.appendChild(form.render());

        expect(sandbox.childNodes.length).toEqual(1);
      });

      it('should listen to the submit event', function () {
        var listener = jasmine.createSpy('listener');
        sandbox.appendChild(form.render());
        form.subscribe('form:submit', listener);
        sandbox.querySelector('input[type="text"]').value = 'test1';
        sandbox.querySelector('input[type="submit"]').click();

        expect(listener).toHaveBeenCalledWith('test1');
        expect(sandbox.querySelector('input[type="text"]').value).toEqual('');
      });

      it('should ignore the submit event if there\'s no text', function () {
        var listener = jasmine.createSpy('listener');
        sandbox.appendChild(form.render());
        sandbox.querySelector('input[type="submit"]').click();

        expect(listener).not.toHaveBeenCalled()
      });

    });

  });

}).call(this, window.TodoApp);
