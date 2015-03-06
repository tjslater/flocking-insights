//'use strict';

angular.module('flockingInsightsApp')
  .directive('scene', function (Scene1, BabylonFactory, $timeout) {
    return {
      template: '<canvas class="col-sm-12"></canvas>',
      restrict: 'EA',
      scope: {
        order: '='
      },
      controller: function ($scope) {

      },
      link: function (scope, element, attrs) {
        var canvas = $(element).children()[0];
        var scene = BabylonFactory.init(canvas);
        if (scope.order == 0){
          scene.camera.position = new BABYLON.Vector3(533,175,-1811);
          scene.camera.rotation = new BABYLON.Vector3(0.0,7,0);
          scene.camera.speed = 4;
        } else{
          scene.camera.position = new BABYLON.Vector3(-90,75,20);
          scene.camera.rotation = new BABYLON.Vector3(0.28,1.77,0);
        }


        var clickHandler = function(evt){

        };
        var moveHandler = function(evt){
          var pickResult = scene.scene.pick(scene.scene.pointerX, scene.scene.pointerY);
          if (pickResult.hit){

          }
        };
        var mousedownHandler = function(){
          var pickResult = scene.scene.pick(scene.scene.pointerX, scene.scene.pointerY);
          if (pickResult.hit){
            console.log(pickResult.pickedMesh);
            /*pickResult.pickedMesh.material.diffuseColor = new BABYLON.Color4(Math.random(), Math.random(), Math.random(), 0.9);
            pickResult.pickedMesh.material.emissiveColor = new BABYLON.Color4(Math.random(),Math.random(),Math.random(),0.9);*/
            console.log(scene.camera)
            console.log(scene);
          }
        };

        var lighting = function(sampleData){
          for (var i = 0; i < sampleData.binCount; i++){
            var value = sampleData.freqs[i];
            var percent = value / 256;
            var hslColor = 'hsl(' + percent * 100 + ', 100%, 50%)';
            var rgb = color2color(hslColor).match(/[0-9 , \.]+/g)[0].split(',');
            var mesh = scene.scene.meshes[i];
            var particleSystem = scene.scene.particleSystems[i];
            if (typeof mesh !== "undefined" && mesh.id === "sphere1"){
              var r = rgb[0]/255;
              var g = rgb[1]/255;
              var b = rgb[2]/255;
              mesh.material.emissiveColor = new BABYLON.Color3(r,g,b);
              mesh.material.diffuseColor = new BABYLON.Color3(b,g,r);
              particleSystem.maxEmitPower = percent*1000;
              particleSystem.minEmitPower = percent*100;
              particleSystem.maxSize = percent*20;

            }
          }
        }
        var resetParticleSystem = function(particleSystem){
          particleSystem.maxEmitPower = 10;
          particleSystem.minEmitPower = 5;
          clearTimeout(resetParticleSystem);
        };

        var bouncing = function(sampleData){
          for (var i = 0; i < sampleData.binCount; i++) {
            var value = sampleData.times[i];
            var percent = value / 1024;
            var mesh = scene.scene.meshes[i];
            if (typeof mesh !== "undefined" && mesh.id === "sphere1"){
              mesh.position.y = percent*1000;
            }
          }
        };


        scope.$root.subscribe('coords', function(pickResult){
          //pickResult.pickedMesh.position.x = pickResult.pickedPoint.x;
          //pickResult.pickedMesh.position.y = pickResult.pickedPoint.y;
        });

        scope.$root.subscribe('updateSamples', function(sampleData) {
          lighting(sampleData);
          bouncing(sampleData);
        });



        scene.engine.runRenderLoop(function () {
          scene.scene.render();
        });

        canvas.addEventListener('click', clickHandler);
        canvas.addEventListener('mousemove', moveHandler);
        canvas.addEventListener('mousedown', mousedownHandler);
      }
    };
  });
