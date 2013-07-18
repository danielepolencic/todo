(function(App){

  'use strict';

  var add,
      observer;

  observer = new App.Observer();
  add = new App.Add(observer);

  var body = document.getElementsByTagName('body')[0];
  var submit = add.render();
  body.appendChild( submit );

  describe('Input area', function(){

    it('should submit a string', function(){
      var callback = jasmine.createSpy('callback');
      observer.subscribe('add', callback);
      submit.getElementsByTagName('input')[0].value = 'test input';
      var btn_submit = submit.getElementsByTagName('input')[1];
      var evt = document.createEvent('HTMLEvents');
      evt.initEvent('click', true, true );
      btn_submit.dispatchEvent(evt);
      expect(callback).toHaveBeenCalled();
    });

  });

  add.destroy();

}).call(this, window.App);
