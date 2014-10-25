(function (TodoApp) {

  'use strict';

  function isString (anything) {
    return Object.prototype.toString.call(anything) === '[object String]';
  }

  function isFunction (anything) {
    return Object.prototype.toString.call(anything) === '[object Function]';
  }

  function Observer () {
    this._listeners = new Map();
  }

  Observer.prototype.subscribe = function (event, callback) {
    if (!isString(event) || event.trim() === '' || !isFunction(callback)) {
      return false;
    }

    if (!this._listeners.has(event)) {
      this._listeners.set(event, []);
    }

    this._listeners.get(event).push(callback);
    return true;
  };

  Observer.prototype.unsubscribe = function (event, callback) {
    if (!isString(event) || event.trim() === '' || !isFunction(callback)) {
      return false;
    }

    if (!this._listeners.has(event)) return false;

    var subscribers = this._listeners.get(event).filter(function (subscriber) {
      return callback !== subscriber;
    });

    this._listeners.set(event, subscribers);
    return true;
  };

  Observer.prototype.publish = function (event){
    if (!isString(event) || event.trim() === '' || !this._listeners.has(event)) {
      return false;
    }

    var args = [].slice.call(arguments, 1);

    this._listeners.get(event).forEach(function (subscriber) {
      subscriber.apply(void 0, args);
    });
    return true;
  };

  TodoApp.Observer = Observer;

}).call(this, window.TodoApp || {});

