
// rollup.config.js
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs';
import babel from 'rollup-plugin-babel';
import forceBinding from 'rollup-plugin-force-binding';

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
      format: 'iife'
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
      })
    ]
  }