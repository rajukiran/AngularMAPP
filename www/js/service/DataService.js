/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
  'use strict';

    var pub = {};
    
    pub.getMovies = function() {
        return $http.get('http://139.59.3.231:8080/SpringWithHibernate/getUserStatistics.do');
    };
    
    return pub;
  
}]);