AppChallenge.factory('AppService', ['$resource', function($resource) {
  return {
    current: $resource('/api/apps/current'),
    apps:    $resource('/api/apps'),
    app:     $resource('/api/apps/:id', {id: '@id'}, {
      update: {method: 'PUT'}
    })
  }
}])
