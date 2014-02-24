AppChallenge.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true)

  $routeProvider
  .when('/', {
    templateUrl: ('assets/home/home.html'),
    controller: 'HomeController',
    resolve: {
      currentApps: ['AppService', function(AppService) {

        return AppService.current.query()
      }]
    }
  })
  .when('/apps/new', {
    templateUrl: ('../assets/apps/new.html')
  })
}])
