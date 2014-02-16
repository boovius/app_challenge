AppChallenge.config(['$routeProvider', '$locationProvider', 'assetPathProvider', function($routeProvider, $locationProvider, assetPathProvider) {

  $locationProvider.html5Mode(true)

  $routeProvider
  .when('/', {
    templateUrl: assetPathProvider.get('home/home.html')
    }
  })
}])
