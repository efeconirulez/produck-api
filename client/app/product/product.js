'use strict';

angular.module('produckWebApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/product/*', {
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      });
  });
