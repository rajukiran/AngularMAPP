/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService', 
    function ($scope, $http, InitService, DataService) {
      'use strict';
        
    $scope.onItemClicked = function (message) {
        console.log(message);
    }
  
     InitService.addEventListener('ready', function () {
         DataService.getMovies().then(function (result) {
             console.log(result);
             $scope.message = result.data.message;
         }, function(err){
             console.error(err);
         })
     })
   }
]);