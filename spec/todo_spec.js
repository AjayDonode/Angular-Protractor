'use strict';

describe('Application Homepage', function() {

    it('should display todo page', function() {
        // You wrote your first test, cross it off the list
        element(by.css('a.todolink')).click();
        var messenger_header = element(by.css('h1.messanger_header')).getText();
        expect(messenger_header).toContain('TODO App');
    });

    it('should have menu button bar', function() {
      var buttongroup = element(by.className('btn-group'));
      expect(buttongroup.isDisplayed()).toEqual(true);
  // buttongroup.isDisplayed().then(function(isVisible) {
  // expect(isVisible).toEqual(true);
  // });
    });

    it('should have no element in todo List', function() {
    var todoListItems = element.all(by.repeater('item in todolist'));
    //ASSERT
    expect(todoListItems.count()).toBe(0);
    });

});
