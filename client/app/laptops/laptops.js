'use strict';

angular.module('produckWebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/laptops', {
        templateUrl: 'app/laptops/laptops.html',
        controller: 'LaptopsCtrl'
      });
  });
