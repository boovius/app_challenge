AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  $scope.app = {userId: gon.currentUser.id }

  $scope.createApp = function(){
    AppService.apps.save(angular.snakeize($scope.app))
  }
}])
