AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  console.log(gon.currentUser.id)

  $scope.app = { user_id: gon.currentUser.id }
  console.log($scope.app)

  $scope.createApp = function(){
    console.log($scope.app)
    AppService.apps.save($scope.app)
  }
}])
