/**
 * @author Rob Southgate <robsouthgate4@gmail.com>
 */

import { version, name } from '../package.json'

const Diagnostics = require("Diagnostics")
const Reactive = require("Reactive")
const Scene = require("Scene")
const FaceTracking = require('FaceTracking')
//const TouchGestures = require('TouchGestures')
const Materials = require('Materials')
const Networking = require('Networking')
const Time = require('Time')

/* Import internal modules */
import Scaling from './scaling'

//const planeTracker = Scene.root.find('planeTracker0')
const face =  FaceTracking.face(0)

/* Example es6 static method call */
Diagnostics.log(Scaling.example)

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

