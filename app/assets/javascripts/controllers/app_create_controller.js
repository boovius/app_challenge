AppChallenge.controller('AppCreateController', ['$scope', 'AppService', '$window', function($scope, AppService, $window) {

  $scope.app = {
    title: gon.currentUser.name + "'s new app",
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
    AppService.apps.save(angular.snakeize($scope.app), function(newApp){
      $window.location.href = '/apps/' + newApp.id
    }, function(){
      alert('Sorry, there was an error creating your app')
    })
  }
}])
