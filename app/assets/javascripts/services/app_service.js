AppChallenge.factory('AppService', ['$resource', function($resource) {
  var currentApps = []
  return {
    currentApps: currentApps,
    current: $resource('/api/apps/current')
  }
}])
