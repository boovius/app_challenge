AppChallenge.directive('appLink', [function() {
  return {
    restrict: 'E',
    require: '^smartTable',
    template: '<a href="/apps/{{dataRow.id}}"> {{dataRow.title}}</a>',
    replace: true
  }
}])
.directive('checkBox', ['FeatureService', '$routeParams', '$window', function (FeatureService, $routeParams, $window) {
  return {
    restrict: 'E',
    require: '^smartTable',
    template: '<input type="checkbox" ng-model="checked" ng-checked="dataRow.done">' +
              '</input>',
    replace: true,
    link: function (scope, element, attrs, ctrl) {
      scope.$watch('checked', function (newValue, oldValue) {
        if(newValue !== oldValue) {
          // Remove the previous action and add new action to the table row)
          FeatureService.feature.update(
            {
              done: newValue,
              id: scope.$parent.$parent.dataRow.id
            }, function(successData){}, function(errorData){
              alert("Unauthorized Update Attempt Asswipe!");
              $window.location = '/'
            }
          )
          //$(element).parent().parent().toggleClass('selected')
        }
        else {
          if(scope.dataRow.done) {
            // $(element).parent().parent().toggleClass('selected')
          }
        }
      })
    }
  }
}])
