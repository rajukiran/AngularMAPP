/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('LoginService', ['$document', '$q', '$http', function ($document, $q, $http) {
  'use strict';

    var pub = {};
    
    pub.getLogin = function(username, password) {
        var config = {
         headers: { 'Content-type': 'application/json' },
         'dataType': 'json'
       };
        var deferred = $q.defer();
        var dataForm = {'userId':username, 'password': password, 'enable':true};
        $http.post('http://139.59.3.231:8080/SpringWithHibernate/validateLogin.do', dataForm, config).
        success(function (data) {
            deferred.resolve(data);
        }).error (function (data) {
            deferred.reject(data);
        })
        
        return deferred.promise;
    };
    return pub; 
}]);