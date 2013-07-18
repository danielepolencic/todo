(function(){

  'use strict';

  describe( 'Observer', function(){

    var observer;

    beforeEach(function() {
      observer = new Observer();
    });

    it( 'should subscribe to an event', function(){

      observer.subscribe('test', function(){
        var args = Array.prototype.slice.call( arguments );
        expect(args[0]).toEqual('test-string');
      });

      observer.publish('test', 'test-string');
    });

    it( 'should unsubscribe from event', function(){
      var callback = jasmine.createSpy('callback');
      observer.subscribe('unsub', callback);
      observer.unsubscribe('unsub', callback);
      observer.publish('unsub', 'none should reply');
      expect(callback).not.toHaveBeenCalled();
    });

  });

}).call(this);
