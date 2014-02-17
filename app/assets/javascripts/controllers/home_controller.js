AppChallenge.controller('HomeController', ['$scope', 'currentApps', function($scope, currentApps) {
  $scope.stuff = "AHAHAHA"
  $scope.currentApps = currentApps
  $scope. dataTableConfig

  $scope.homeTableColumns = [
        {label: 'Title', map: 'title'},
        {label: 'Developers', map:'developer'}
  ]

  console.log($scope)
  console.log(currentApps)
}])
