AppChallenge.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true)

  $routeProvider
  .when('/apps/:id', {
    templateUrl: ('assets/apps/show.html'),
    controller: 'AppShowController',
    resolve: {
      app: ['$q', 'AppService', '$route', function($q, AppService, $route) {
        console.log($route.current.params)
        var deferred = $q.defer()
        AppService.show.get({id: $route.current.params.id}).
        $then(function(data){
          deferred.resolve(data.data)
        })
        return deferred.promise
      }]
    }
  })
  .when('/', {
    templateUrl: ('assets/home/home.html'),
    controller: 'HomeController',
    resolve: {
      currentApps: ['AppService', function(AppService) {
        return AppService.current.query()
      }]
    }
  })
}])
