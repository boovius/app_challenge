AppChallenge.factory('AppService', ['$resource', function($resource) {
  return {
    current: $resource('/api/apps/current'),
    show: $resource('api/apps/:id' {id: '@id'})
  }
}])
