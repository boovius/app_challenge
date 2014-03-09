AppChallenge.controller('AppEditController', ['$scope', 'app', 'AppService', function($scope, app, AppService) {

  $scope.app = app.app
  $scope.app.repo    = $scope.app.links[0].href
  $scope.app.url     = $scope.app.links[1].href
  $scope.app.stories = $scope.app.links[2].href

  console.log($scope.app)

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
