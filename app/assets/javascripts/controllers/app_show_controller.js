AppChallenge.controller('AppShowController', ['$scope', 'app', function($scope, app) {
  console.log(app)

  $scope.app = app.app

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.showAppTableColumns = [
        {label: 'Feature', map: 'title'},
        {label: 'Points', map:'developer'},
        {label: 'Completed', map:'percentageComplete', cellTemplateUrl: ('assets/cell_templates/percentage.html')}
  ]

  // $scope.showAppTableRowData = app.app.features

}])
