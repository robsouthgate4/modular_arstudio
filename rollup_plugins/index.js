/**
 * @author [Rob Southgate]
 * @email [robsouthgate4@gmail.com]
 * @create date 2018-09-07 02:34:12
 * @modify date 2018-09-07 02:34:12
 * @desc Contains rollup plugins to be used inside a rollop.config.js file
*/


const fs = require('fs-extra')

export const createDist = (options) => {
    return {
        ongenerate(){
            Promise.all([
              fs.copy('./scripts/', './dist/scripts'), 
              fs.copy('./shaders/', './dist/shaders'), 
              fs.copy('./textures/', './dist/textures'),
              fs.copy('./objects/', './dist/objects')]).then((values) => {
                fs.copy('./gucci.arproj', './dist/gucci.arproj').then(() => {
                  console.log('success')
                })
            });
        }
    };
}