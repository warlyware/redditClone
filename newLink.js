redditClone.controller('NewLinkCtrl', function($scope, $http, $location, linkService){
  $scope.newLink = {};
  $scope.addLinkAndRedirect = function() {
    linkService.storeLink($scope.newLink);
    $location.path('/')
  };
});