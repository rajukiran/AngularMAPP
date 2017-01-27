/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('LoginPageController', ['$scope', '$http', '$rootScope', 'InitService', 'LoginService', function ($scope, $http, $rootScope, InitService, LoginService) {
  'use strict';
  $scope.userData = '';
    var result = '';  
    
    
    $scope.signIn = function (user) {
        
        LoginService.getLogin(user.name, user.password).then(function (obj) {
            console.log(obj);
            $rootScope.$broadcast('LoginEvent', obj);
            
            result = obj;
        })
    }
//    console.log(result);
}]);