AppChallenge.controller('HomeController', ['$scope', 'currentApps', function($scope, currentApps) {
  $scope.stuff = "AHAHAHA"
  $scope.currentApps = currentApps

  console.log($scope)
  console.log(currentApps)
}])
