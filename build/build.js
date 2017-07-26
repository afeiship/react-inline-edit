(function() {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //clean
  gulp.task('build', ['clean'],function() {
    gulp.start(['scripts']);
  });

}());
