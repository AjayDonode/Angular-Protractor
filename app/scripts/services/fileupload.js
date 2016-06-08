'use strict';

/**
 * @ngdoc service
 * @name dnexappApp.fileupload
 * @description
 * # fileupload
 * Service in the dnexappApp.
 */
angular.module('dnexappApp')
    .factory('UploadService', function($http) {
        var uploadUrl = "http://localhost:8081/rptservice/uploadFile";
        return {

            sayHello: function() {
                console.log('Test Service');
            },
            upload: function(file) {
                console.log("Before Upload");
                var fd = new FormData();
                fd.append('uploadfile', file);
                $http.post(uploadUrl, fd, {
                        withCredentials: false,
                        headers: {
                            'Content-Type': undefined
                        },
                        transformRequest: angular.identity
                    })
                    .success(function(data) {
                        console.log("Success" + data);
                    })
                    .error(function(data) {
                        console.log("Error" + data);
                    });
            }
        };
    });
