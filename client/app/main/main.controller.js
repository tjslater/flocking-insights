'use strict';

angular.module('flockingInsightsApp')
  .controller('MainCtrl', function ($scope, $http, socket, VisualizerSample) {
    $scope.scenesVals = _.range(0, 1);


    var sample = new VisualizerSample();
    if (sample.isPlaying) {
      //requestAnimFrame(sample.draw.bind(sample));

    }

    update();
    function update() {
      var samples = sample.getSampleData();
      $scope.publish('updateSamples', samples);
      requestAnimationFrame(update);

    }

    document.querySelector('button').addEventListener('click', function () {
      sample.togglePlayback();
    });

  });
