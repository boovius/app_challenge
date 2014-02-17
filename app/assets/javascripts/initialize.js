//= require_self
//= require_tree ./directives
//= require_tree ./controllers
//= require_tree ./services

AppChallenge = angular.module('AppChallenge', [
  'ngRoute',
  'ngResource',
  'smartTable.table',
  'ui.bootstrap'
])

.config(['$httpProvider', '$routeProvider', '$locationProvider', function($httpProvider, $routeProvider, $locationProvider) {

}])

