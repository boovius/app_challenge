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
  .when('/apps/:id', {
    templateUrl: ('assets/apps/show.html'),
    controller: "AppShowController",
    controllerAs: "boooo",
    resolve: {
      app: ['AppService', '$route', function(AppService, $route){
        return AppService.show.get({id: $route.current.params.id})
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
