'use strict';

/**
 * @ngdoc service
 * @name dnexappApp.TodoStore
 * @description
 * # TodoStore
 * Service in the dnexappApp.
 */
angular.module('dnexappApp')
    .factory('TodoStore', function() {

        
        
var todolist = [];
        return {

            add: function(object) {
					todolist.push(object);
            },

            remove: function(object) {
            	delete todolist[object.id];
            },

            removeAll: function() {
				todolist = [];
            },

            marked: function(object) {
            	object.marked = true;
            }

        }

    });
