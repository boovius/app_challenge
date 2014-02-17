AppChallenge.controller('HomeController', ['$scope', 'currentApps', function($scope, currentApps) {
  $scope.stuff = "AHAHAHA"
  $scope.currentApps = currentApps

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.homeTableColumns = [
        {label: 'App', map: 'title'},
        {label: 'Developer', map:'developer'}
  ]

  console.log($scope)
  console.log(currentApps)
}])
