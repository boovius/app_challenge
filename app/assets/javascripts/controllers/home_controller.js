AppChallenge.controller('HomeController', ['$scope', 'currentApps', '$filter', function($scope, currentApps, $filter) {

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.homeTableColumns = [
        {label: 'App', map: 'title'},
        {label: 'Developer', map:'developer'},
        {label: 'Percent Completed', map:'percentageComplete'}
  ]

  $scope.homeTableRowData = currentApps
  //$filter('orderBy', currentApps, 'percentageComplete')

  console.log(currentApps)
  console.log($scope.homeTableRowData)
}])
