AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  $scope.app = {}

  $scope.createApp = function(){
    console.log($scope.app)
    AppService.apps.save($scope.app)
  }
}])
