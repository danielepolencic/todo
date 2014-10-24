(function (TodoApp) {

  'use strict';

  function isString (anything) {
    return Object.prototype.toString.call(anything) === '[object String]';
  }

  function isFunction (anything) {
    return Object.prototype.toString.call(anything) === '[object Function]';
  }

  function Observer () {
    this.listeners = new Map();
  }

  Observer.prototype.subscribe = function (event, callback) {
    if (!isString(event) || event.trim() === '' || !isFunction(callback)) {
      return false;
    }

    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(callback);
    return true;
  };

  Observer.prototype.unsubscribe = function (event, callback) {
    if (!isString(event) || event.trim() === '' || !isFunction(callback)) {
      return false;
    }

    if (!this.listeners.has(event)) return false;

    var subscribers = this.listeners.get(event).filter(function (subscriber) {
      return callback !== subscriber;
    });

    this.listeners.set(event, subscribers);
    return true;
  };

  Observer.prototype.publish = function (event){
    if (!isString(event) || event.trim() === '' || !this.listeners.has(event)) {
      return false;
    }

    var args = [].slice.call(arguments, 1);

    this.listeners.get(event).forEach(function (subscriber) {
      subscriber.apply(void 0, args);
    });
    return true;
  };

  TodoApp.Observer = Observer;

}).call(this, window.TodoApp || {});

