(function () {
  "use strict";
  var mainApp = angular.module('mainApp', ['ngRoute']);
  
  mainApp.config(function ($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'mainController',
      controllerAs: 'main'
    });
    
  })

})();
