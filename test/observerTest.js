'use strict';

var chai = require('chai'),
    Observer = require('../src/observer.js');

chai.should();

describe( 'Observer', function(){

  var observer = new Observer();

  it( 'should subscribe to an event', function( done ){
    observer.subscribe('test', function(){
      var args = Array.prototype.slice.call( arguments );
      args[0].should.be.equal('test-string');
      done();
    });
    observer.publish('test', 'test-string');
  });

  it( 'should unsubscribe from event', function( done ){
    var callback1 = function(){
      "1".should.be.equal(0);
      done();
    };
    var callback2 = function(){
      done();
    };
    observer.subscribe('unsub', callback1);
    observer.subscribe('unsub', callback2);
    observer.unsubscribe('unsub', callback1);
    observer.publish('unsub', 'none should reply');
  });

});
