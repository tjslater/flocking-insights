'use strict';

angular.module('flockingInsightsApp')
  .factory('BabylonFactory', function () {

    function init(canvas){

      var engine = new BABYLON.Engine(canvas, true);
      var scene = new BABYLON.Scene(engine);
      scene.clearColor = new BABYLON.Color4(0, 0, 0, 1.0);

      // This creates and positions a free camera
      var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, -90), scene);

      // This targets the camera to scene origin
      camera.setTarget(BABYLON.Vector3.Zero());

      // This attaches the camera to the canvas
      camera.attachControl(canvas, false);

      // This creates a light, aiming 0,1,0 - to the sky.
      var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

      // Dim the light a small amount
      light.intensity = 1;

      // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
      for (var i = 0; i < 511; i++){
        var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 0, scene);
        var particleSystem = new BABYLON.ParticleSystem("particles", 1000, scene);
        particleSystem.particleTexture = new BABYLON.Texture("../assets/images/Flare.png", scene);
        particleSystem.emitter = sphere;
        particleSystem.minSize = 1.1;
        particleSystem.maxSize = 2.5;
        particleSystem.minLifeTime = 0.3;
        particleSystem.maxLifeTime = 1.5;
        particleSystem.emitRate = 200;
        particleSystem.gravity = new BABYLON.Vector3(1, -9.81, -1);
        particleSystem.minEmitPower = 5;
        particleSystem.maxEmitPower = 10;
        particleSystem.start();

        sphere.position.z = Math.sin(i) *10;
        sphere.position.x = 5*i;
        //sphere.position.z = Math.sin(i) * Math.random() * 3;
        sphere.material = new BABYLON.StandardMaterial("texture1", scene);

      }

      // Let's try our built-in 'ground' shape.  Params: name, width, depth, subdivisions, scene
      var ground = BABYLON.Mesh.CreateGround("ground1", 6000, 6000, 2, scene);

      var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
      groundMaterial.specularColor = new BABYLON.Color4(0, 0, 0, 0);
      groundMaterial.diffuseColor = new BABYLON.Color4(0, 0, 0, 0);
      ground.material = groundMaterial;

      ground.rotation.x = 300;
      ground.position.z = 40;

      scene.enablePhysics();
      scene.setGravity(new BABYLON.Vector3(0, 0, -10));
      /*var music = new BABYLON.Sound("TheChosenRoadie", "../assets/music/TheChosenRoadie.mp3", scene, function () {
        // Call with the sound is ready to be played (loaded & decoded)
        // TODO: add your logic
        console.log("Sound ready to be played!");
      }, { loop: false, autoplay: true, spatialSound: true, distanceModel: "linear" });
      music.attachToMesh(scene.meshes[0]);
      var myAnalyser = new BABYLON.Analyser(scene);
      BABYLON.Engine.audioEngine.connectToAnalyser(myAnalyser);*/






      // Leave this function
      return {
        scene: scene,
        engine: engine,
        camera: camera
      };

    }





    return {
      init: init
    };
  });
