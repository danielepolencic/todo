(function(){

  'use strict';

  function Observer(){
    this.cache = {};
  }

  Observer.prototype.subscribe = function( event, callback ){

    if ( !event ) { return; }

    if ( !Array.isArray(this.cache[event]) ) {
      this.cache[event] = [];
    }
    this.cache[event].push( callback );

    return {
      event : event,
      callback : callback
    };

  };

  Observer.prototype.unsubscribe = function( identifier ){

    if( !this.cache[identifier.event] ) { return; }

    this.cache[identifier.event] = this.cache[identifier.event].filter( function( callback ){
      return callback !== identifier.callback;
    });

  };

  Observer.prototype.publish = function( event ){

    var args = Array.prototype.slice.call( arguments, 1 );
    this.cache[event].forEach( function( subscriber ){
      subscriber && subscriber.apply( null, args );
    }.bind(this));

  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Observer;
    }
    exports.Observer = Observer;
  } else {
    this.Observer = Observer;
  }

}).call(this);

