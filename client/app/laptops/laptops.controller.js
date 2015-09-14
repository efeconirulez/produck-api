'use strict';

angular.module('produckWebApp')
  .controller('LaptopsCtrl', function ($scope, $http, $location) {
	$scope.laptop = { ASIN:[], UPC:[], EAN:[], colorOptions:[] };
  $scope.errorMessage = '';

  $scope.register = function() {
      $http.post('/api/laptops', $scope.laptop).
          success(function(data) {
              $location.path('/laptops');
              $scope.message = 'Basariyla Kaydedildi!';
              $scope.laptop = { ASIN:[], UPC:[], EAN:[], colorOptions:[] };
          }).error(function(err) {
              $scope.errorMessage = err;
              console.log(7897);
          });
  }
  
  $scope.addFormField = function() {
    $scope.laptop.ASIN.push('');
  }
  $scope.addUPC = function() {
    $scope.laptop.UPC.push('');
  }
  $scope.addEAN = function() {
    $scope.laptop.EAN.push('');
  }
  $scope.addColor = function() {
    $scope.laptop.colorOptions.push('');
  }
});

