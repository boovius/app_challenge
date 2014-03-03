AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  $scope.app = {
    userId: gon.currentUser.id,
    features: []
  }

  $scope.addNewFeature = function(){
    $scope.app.features.push({})
  }

  $scope.deleteFeature = function(index){
    $scope.app.features.splice(index)
  }

  $scope.createApp = function(){
    AppService.apps.save(angular.snakeize($scope.app))
  }
}])
