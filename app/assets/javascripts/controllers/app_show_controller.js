AppChallenge.controller('AppShowController', ['$scope', 'app', function($scope, app) {
  console.log(app)
  $scope.app = app
}])
