AppChallenge.controller('HomeController', ['$scope', 'currentApps', function($scope, currentApps) {

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.homeTableColumns = [
        {label: 'App', map: 'title', cellTemplateUrl: ('assets/cell_templates/link.html')},
        {label: 'Developer', map:'developer'},
        {label: 'Percent Completed', map:'percentageComplete', cellTemplateUrl: ('assets/cell_templates/percentage.html')}
  ]

  $scope.homeTableRowData = currentApps
  //$filter('orderBy', currentApps, 'percentageComplete')

  console.log(currentApps)
  console.log($scope.homeTableRowData)
}])
