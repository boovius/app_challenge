AppChallenge.controller('AppEditController', ['$scope', 'app', 'AppService', '$window', function($scope, app, AppService, $window) {

  $scope.app = app.app
  $scope.app.repo    = $scope.app.links[0].href
  $scope.app.url     = $scope.app.links[1].href
  $scope.app.stories = $scope.app.links[2].href

  $scope.addNewFeature = function(){
    $scope.app.features.push({})
  }

  $scope.deleteFeature = function(index){
    $scope.app.features.splice(index)
  }

  $scope.updateApp = function(){
    AppService.app.update(angular.snakeize($scope.app), function(updatedApp){
      $window.location.href = '/apps/' + updatedApp.id
    }, function(errorData){
      console.log(errorData.messages)
      alert('You do not have priveledges to update this app asswipe')
      $window.location.href = '/'
    })
  }
}])
