'use strict';

describe('Application Homepage', function() {  
  it('should display the application name', function() {
    browser.get('http://localhost:9000');
    var appName = element(by.css('a.navbar-brand')); //using the CSS selector
    expect(appName.getText()).toEqual('dnexapp');
  });

  it('should display the application name', function() {
    browser.get('http://localhost:9000');
    var appName = element(by.css('a.navbar-brand')); //using the CSS selector
    expect(appName.getText()).toEqual('dnexapp');
  });

}); 
