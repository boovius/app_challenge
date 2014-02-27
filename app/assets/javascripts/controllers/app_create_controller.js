AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  console.log(gon.user)

  $scope.app = {}

  $scope.createApp = function(){
    console.log($scope.app)
    AppService.apps.save($scope.app)
  }
}])
