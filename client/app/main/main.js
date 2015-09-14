'use strict';

angular.module('produckWebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/products/tablet', {
        templateUrl: 'app/product/product.html',
        controller: 'SignupCtrl'
      });
  });