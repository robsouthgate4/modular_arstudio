(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Reactive = require("Reactive");

  var Scaling = function () {
      function Scaling() {
          classCallCheck(this, Scaling);
      }

      createClass(Scaling, null, [{
          key: "scaleObject",
          value: function scaleObject(object, value) {
              var lastScaleX = object.transform.scaleX.lastValue;
              object.transform.scaleX = Reactive.mul(lastScaleX, value);

              var lastScaleY = object.transform.scaleY.lastValue;
              object.transform.scaleY = Reactive.mul(lastScaleY, value);

              var lastScaleZ = object.transform.scaleZ.lastValue;
              object.transform.scaleZ = Reactive.mul(lastScaleZ, value);
          }
      }, {
          key: "example",
          get: function get$$1() {
              return 'This is an example ES6 get method';
          }
      }]);
      return Scaling;
  }();

  var Diagnostics = require("Diagnostics");
  var Reactive$1 = require("Reactive");
  var Scene = require("Scene");
  var FaceTracking = require('FaceTracking');
  //const TouchGestures = require('TouchGestures')
  var Materials = require('Materials');
  var Networking = require('Networking');
  var Time = require('Time');

  //const planeTracker = Scene.root.find('planeTracker0')
  var face = FaceTracking.face(0);

  /* Example es6 static method call */
  Diagnostics.log(Scaling.example);

  /**
   * User interactions
   */

  // TouchGestures.onTap().subscribe(gesture => {
  //     planeTracker.trackPoint(gesture.location)
  // })


  // TouchGestures.onPan(planeTracker).subscribe(gesture => {
  //     planeTracker.trackPoint(gesture.location, gesture.state)
  // })

  // TouchGestures.onPinch().subscribe(gesture => {
  //     Scaling.scaleObject(playerWrapper, gesture.scale)
  // })

  // TouchGestures.onRotate(playerWrapper).subscribe(gesture => {
  //     const lastRotationY = playerWrapper.transform.rotationY.lastValue
  //     playerWrapper.transform.rotationY = Reactive.add(lastRotationY, Reactive.mul(-1, gesture.rotation)) 
  // })

}());
