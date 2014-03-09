AppChallenge.directive('appLink', [function() {
  return {
    restrict: 'E',
    require: '^smartTable',
    template: '<a href="/apps/{{dataRow.id}}"> {{dataRow.title}}</a>',
    replace: true
  }
}])
