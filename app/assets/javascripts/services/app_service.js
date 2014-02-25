AppChallenge.factory('AppService', ['$resource', function($resource) {
  return {
    current: $resource('/api/apps/current'),
    apps:    $resource('/api/apps')
  }
}])
