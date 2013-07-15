var chai = require('chai');
    Observer = require('../src/observer.js');

chai.should();

describe( 'Observer', function(){

  var observer = new Observer();

  it( 'should subscribe to an event', function( done ){
    ticket = observer.subscribe('test', function(){
      var args = Array.prototype.slice.call( arguments )
      args[0].should.be.equal('test-string');
      done();
    });
    observer.publish('test', 'test-string');
  });

  it( 'should unsubscribe from event', function( done ){
    var ticket = observer.subscribe('unsub', function(){
      "1".should.be.equal(0);
      done();
    });
    observer.subscribe('unsub', function(){
      done();
    })
    observer.unsubscribe( ticket );
    observer.publish('unsub', 'none should reply');
  });

});
