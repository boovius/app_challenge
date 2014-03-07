AppChallenge.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true)

  $routeProvider
  .when('/', {
    templateUrl: ('../templates/home/home.html'),
    controller: 'HomeController',
    resolve: {
      currentApps: ['AppService', function(AppService) {
        return AppService.current.query()
      }]
    }
  })
  .when('/apps/new', {
    templateUrl: ('../assets/apps/new.html'),
    controller: 'AppCreateController'
  })
  .when('/apps/:id', {
    templateUrl: ('../assets/apps/show.html'),
    controller: "AppShowController",
    resolve: {
      app: ['AppService', '$route', function(AppService, $route){
        return AppService.show.get({id: $route.current.params.id});
      }]
    }
  })
  .otherwise({
    resolve: {
      login: ['Auth', '$window', function(Auth, $window) {
        $window.location.href = '/'
      }]
    }
  })
}])
