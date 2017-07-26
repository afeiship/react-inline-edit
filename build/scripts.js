(function() {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });


  //scripts
  gulp.task('scripts', function() {
    return gulp.src('src/components/*.*')
      .pipe(gulp.dest('dist'));
  });

}());
