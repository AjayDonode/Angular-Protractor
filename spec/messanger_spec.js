'use strict';

describe('Application Homepage', function() {  

  it('should display messanger page', function() {
        // You wrote your first test, cross it off the list
    element(by.css('a.homelink')).click();
    var messenger_header = element(by.css('h1.messanger_header')).getText();
    expect(messenger_header).toEqual('Messenger');
  });

  it('should enter text to messagebox', function() {
   
  var messageBox = element(by.model('messageText'));
      messageBox.clear();

    messageBox.sendKeys('write first protractor test');
    element(by.id('btn_send')).click();
    var messenger_text = element(by.model('comment'));
    console.log(messenger_text.getAttribute('value'));
    expect(messenger_text.getAttribute('value')).toEqual('write first protractor test');
  });

}); 
