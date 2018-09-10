/**
 * @author [Rob Southgate]
 * @email [robsouthgate4@gmail.com]
 * @create date 2018-08-20 10:01:11
 * @modify date 2018-08-20 10:01:11
 * @desc Rollup configuration for AR studio projects
*/

// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import forceBinding from 'rollup-plugin-force-binding';
import  uglify  from 'rollup-plugin-uglify';
import path from 'path'
import { createDist } from './rollup_plugins/index.js'
import fs from 'fs'

/*
Get entry file incase AR studio appends hash key to script.js 
*/
function getEntry (){
  return fs.readdirSync('./scripts/')
      .filter(
          (file) => file.match(/script/g)
      )[0]
}
export default{
    input: 'src/index.js',
    output: {
      name: 'script',  
      file: 'scripts/' + getEntry(),
      format: 'cjs'
    },
    watch: {
      include: ['src/**', 'data/**'],
      exclude: ['node_modules/**']
    },
    plugins: [
      json(),
      babel({
        exclude: 'node_modules/**',
        plugins: ['external-helpers']
      }),
      (process.env.Production === 'true' && uglify()),
      (process.env.Production === 'true' && createDist())
    ]
  }