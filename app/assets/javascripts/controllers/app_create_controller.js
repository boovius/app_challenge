AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  console.log(gon.currentUser.id)

  $scope.app = { userId: gon.currentUser.id }
  console.log($scope.app)

  $scope.createApp = function(){
    console.log($scope.app)
    AppService.apps.save($scope.app)
  }
}])
