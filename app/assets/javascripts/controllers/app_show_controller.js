AppChallenge.controller('AppShowController', ['$scope', 'app', function($scope, app) {
  console.log(app)

  $scope.app = app.app

  $scope.dataTableConfig = {
    itemsByPage: 50,
    isPaginationEnabled: false
  }

  $scope.showAppTableColumns = [
        {label: 'Feature', map: 'title'},
        {label: 'Points', map:'points'},
        {label: 'Completed', map:'done'}
  ]

  $scope.showAppTableRowData = app.app.features

}])
