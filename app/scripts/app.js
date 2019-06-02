'use strict';
/**
 * @Author: yordin
 * @Date:   2019-05-30T21:10:41-04:00
 * @Last modified by:   yordin
 * @Last modified time: 2019-06-02T01:47:03-04:00
 */
var app = angular.module('app', ['ngResource','ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl'
    })
    .when('/search/:username', {
        templateUrl: 'app/views/search.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
