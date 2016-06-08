'use strict';

/**
 * @ngdoc function
 * @name dnexappApp.controller:FileuploadCtrl
 * @description
 * # FileuploadCtrl
 * Controller of the dnexappApp
 */
angular.module('dnexappApp')
    .controller('FileUploadCtrl', function($scope,UploadService) {

        $scope.progressVisible = false;
        $scope.progress = "100%";
        $scope.dropText = 'Drop file here';
        $scope.isError = false;
        $scope.errormessage = "";

        $scope.uploadFile = function() {
            UploadService.upload();
        }


        $scope.setFiles = function(element) {
            $scope.$apply(function($scope) {
                console.log('files:', element.files);
                $scope.files = []
                for (var i = 0; i < element.files.length; i++) {
                    $scope.files.push(element.files[i])
                }
                $scope.progressVisible = false
            });
        };


       /* $scope.uploadFile = function() {
            var fd = new FormData()
            for (var i in $scope.files) {
                fd.append("uploadedFile", $scope.files[i])
            }
            var xhr = new XMLHttpRequest()
            xhr.upload.addEventListener("progress", uploadProgress, false)
            xhr.addEventListener("load", uploadComplete, false)
            xhr.addEventListener("error", uploadFailed, false)
            xhr.addEventListener("abort", uploadCanceled, false)
            xhr.open("POST", "http://localhost:8081/rptservice/uploadFile")
            $scope.progressVisible = true
            xhr.send(fd)
        }*/

        function uploadProgress(evt) {
            $scope.$apply(function() {
                if (evt.lengthComputable) {
                    $scope.progress = Math.round(evt.loaded * 100 / evt.total)
                } else {
                    $scope.progress = 'unable to compute'
                }
            })
        }

        function uploadComplete(evt) {
            /* This event is raised when the server send back a response */
           $scope.isError = true;
           $scope.errormessage = evt.target.responseText;
        }

        function uploadFailed(evt) {
            alert("There was an error attempting to upload the file.")
        }

        function uploadCanceled(evt) {
            scope.$apply(function() {
                scope.progressVisible = false
            })
            alert("The upload has been canceled by the user or the browser dropped the connection.")
        }


    });
