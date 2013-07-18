(function(App){

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

  };

  Observer.prototype.unsubscribe = function( event, callback ){

    if( !this.cache[event] ) { return; }

    this.cache[event] = this.cache[event].filter( function( cb ){
      return cb !== callback;
    });

  };

  Observer.prototype.publish = function( event ){

    var args = Array.prototype.slice.call( arguments, 1 );
    this.cache[event].forEach( function( subscriber ){
      subscriber && subscriber.apply( null, args );
    });

  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = Observer;
    }
    exports.Observer = Observer;
  } else {
    this.Observer = Observer;
  }

  App.Observer = Observer;

}).call(this, window.App || {});

