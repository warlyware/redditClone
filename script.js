'use strict';


var redditClone = angular.module('redditClone', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      templateUrl: 'list.html'
    })
    .when('/new', {
      controller: 'NewLinkCtrl',
      templateUrl: 'new.html'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.service('linkService', function() {
  this.links = [];
  this.storeLink = function(newLink) {
    this.links.unshift(newLink);
    this.link = {};
    // $location.path('/');
  };
  this.deleteLink = function(linkIndex) {
    this.links.splice(linkIndex, 1);
  };
})
// .service('linkService', function() {
//   this.links = [];
//   this.storeLink = function(newLink) {
//     this.links.unshift(newLink);
//     this.link = {};
//     // $location.path('/');
//   }
// })
.controller('ListCtrl', function($scope, $http, linkService){
  $scope.links = linkService.links;
  $scope.deleteLink = function(index) {
    console.log('delete');
    linkService.deleteLink(index);
  }
});
