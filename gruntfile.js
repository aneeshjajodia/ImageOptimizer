'use strict';
module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      imagemin: {
        dist: {
          options: {
            progressive: true,
            optimizationLevel: 7
          },
          files: [{
            expand: true,
            cwd: 'uploads/',
            src: '**/*.{jpg,jpeg,png}',
            dest: 'uploads/'
          }]
        }
      },
      smushit: {
        mygroup: {
          src: [
                'uploads/**/*.jpg',
                'uploads/**/*.png'
               ],
          dest: 'uploads/'
        }
      }
  });
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-smushit');
grunt.registerTask('default', ['imagemin']);
};
