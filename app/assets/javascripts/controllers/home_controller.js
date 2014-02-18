AppChallenge.controller('HomeController', ['$scope', 'currentApps', function($scope, currentApps) {

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.homeTableColumns = [
        {label: 'App', map: 'title'},
        {label: 'Developer', map:'developer'}
  ]

  $scope.homeTableRowData = currentApps
}])
