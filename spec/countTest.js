(function(App){

  'use strict';

  var count,
      observer;

  observer = new App.Observer();
  count = new App.Count(observer);

  var body = document.getElementsByTagName('body')[0];
  body.appendChild( count.render() );

  describe('Tagline count', function(){

    it('should be incremented by one', function(){
      observer.publish('add');
      expect(count.total).toBe(1);
    });

    it('should be decremented by one', function(){
      observer.publish('remove');
      expect(count.total).toBe(0);
    });

  });

  count.destroy();

}).call(this, window.App);
