'use strict';

angular.module('produckWebApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [{
      'title': 'Laptops',
      'link': '/products/laptop'
    },
    {
      'title': 'Tablets',
      'link': 'products/tablet'
    },
    {
      'title': 'Cellphones',
      'link': '/products/cellphone'
    }];
    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/categorys', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/categorys/' + thing._id);
    // };
  });
