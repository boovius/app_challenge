AppChallenge.controller('AppCreateController', ['$scope', 'AppService', function($scope, AppService) {

  $scope.app = {
    userId: gon.currentUser.id,
    features: []
  }

  console.log(angular.isDefined($scope.app.features))
  console.log($scope.app.features)

  $scope.addNewFeature = function(){
    var index = $scope.app.features.length > 0 ? $scope.app.features.length : 0
    var new_feature =  {id: $scope.app.features[index]}
    console.log(new_feature)
    $scope.app.features.push(new_feature)
    console.log($scope.app.features)
  }

  $scope.deleteFeature = function(index){
    $scope.app.features.splice(index)
  }

  $scope.createApp = function(){
    AppService.apps.save(angular.snakeize($scope.app))
  }
}])
