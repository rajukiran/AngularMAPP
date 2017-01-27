/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('WelcomePageController', ['$scope', '$http', 'InitService', 'DataService', 
    function ($scope, $http, InitService, DataService) {
      'use strict';
        
        $scope.$on('LoginEvent', function (event, data) {
            console.log("working :: ");
            console.log(data)
            $scope.user_info = data.user_info;
        });
        
   }
]);