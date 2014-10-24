(function (TodoApp) {

  'use strict';

  describe('Observer', function () {

    var observer;

    beforeEach(function() {
      observer = new TodoApp.Observer();
    });

    describe('Observer.prototype.constructor', function () {});

    describe('Observer.prototype.subscribe', function () {

      it('should subscribe to topic', function () {
        var listener = jasmine.createSpy('listener');
        expect(observer.subscribe('test', listener)).toBe(true);
      });

      it('should not subscribe if the event is invalid', function () {
        var listener = jasmine.createSpy('listener');
        expect(observer.subscribe(null, listener)).toBe(false);
        expect(observer.subscribe([], listener)).toBe(false);
        expect(observer.subscribe('', listener)).toBe(false);
        expect(observer.subscribe(' ', listener)).toBe(false);
      });

      it('should not subscribe if the callback is not a function', function () {
        expect(observer.subscribe('test', [])).toBe(false);
        expect(observer.subscribe('test', 'a')).toBe(false);
      });

    });

    describe('Observer.prototype.unsubscribe', function () {

      it('should unsubscribe from a topic', function () {
        var listener = jasmine.createSpy('listener');
        observer.subscribe('unsub', listener);
        expect(observer.unsubscribe('unsub', listener)).toBe(true);
      });

      it('should not unsubscribe if the topic is new', function () {
        expect(observer.unsubscribe('unsub', function () {})).toBe(false);
      });

      it('should not unsubscribe if the event is invalid', function () {
        var listener = jasmine.createSpy('listener');
        expect(observer.unsubscribe(null, listener)).toBe(false);
        expect(observer.unsubscribe([], listener)).toBe(false);
        expect(observer.unsubscribe('', listener)).toBe(false);
        expect(observer.unsubscribe(' ', listener)).toBe(false);
      });

      it('should not unsubscribe if the callback is not a function', function () {
        expect(observer.unsubscribe('test', [])).toBe(false);
        expect(observer.unsubscribe('test', 'a')).toBe(false);
      });

    });

    describe('Observer.prototype.publish', function () {

      it('should publish to a topic', function () {
        var listenerA = jasmine.createSpy('listenerA');
        var listenerB = jasmine.createSpy('listenerB');
        observer.subscribe('topicA', listenerA);
        observer.subscribe('topicB', listenerB);

        expect(observer.publish('topicA', 'test-string')).toBe(true);
        expect(listenerA).toHaveBeenCalledWith('test-string');
        expect(listenerB).not.toHaveBeenCalled();
      });

      it('should not publish an event if the topic is invalid', function () {
        expect(observer.publish()).toBe(false);
        expect(observer.publish('')).toBe(false);
        expect(observer.publish(' ')).toBe(false);
      });

      it('should publish to a topic multiple arguments', function () {
        var listenerA = jasmine.createSpy('listener');
        var listenerB = jasmine.createSpy('listener');
        observer.subscribe('test', listenerA);
        observer.subscribe('test', listenerB);

        expect(observer.publish('test', 'test-string', 1, ['a'])).toBe(true);
        expect(listenerA).toHaveBeenCalledWith('test-string', 1, ['a']);
        expect(listenerB).toHaveBeenCalledWith('test-string', 1, ['a']);
      });

    });

  });

}).call(this, window.TodoApp || {});
