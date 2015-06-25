'use strict';

console.log('angular loading');
angular.module('heimdall', [])
.controller('MainCtrl', function($scope, $http){
  $scope.links = [];
  $scope.addLink = function() {
    $scope.links.push($scope.link);
    $scope.link = {};
  }
});
