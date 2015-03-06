'use strict';

angular.module('flockingInsightsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('flock', {
        url: '/flock',
        templateUrl: 'app/flock/flock.html',
        controller: 'FlockCtrl'
      });
  });