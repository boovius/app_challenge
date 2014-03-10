AppChallenge.factory('FeatureService', ['$resource', function($resource) {
  return {
    feature:  $resource('/api/features/:id', {id: '@id'}, {
      update: {method: 'PUT'}
    })
  }
}])
