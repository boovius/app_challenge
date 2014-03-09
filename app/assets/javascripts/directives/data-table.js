AppChallenge.directive('appLink', [function() {
  return {
    restrict: 'E',
    require: '^smartTable',
    template: '<a href="{{appUrl}}/apps/{{dataRow.id}}"> {{dataRow.title}}</a>',
    replace: true,
    link: function (scope, element, attrs, ctrl) {
      // var stats = scope.dataRow.socialStatCounts
      console.log(scope.dataRow)
      scope.appUrl = gon.config.appUrl

      // scope.socialStats = scope.dataRow.selectedSocialStats

      // scope.$watch('socialStats', function (newValue, oldValue) {
      //   DataTableService.selectionChange(scope, element, newValue, oldValue, 'socialStats')
      // })
    }
  }
}])
