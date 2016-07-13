'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');


gulp.task('copy-mocks', function() {
  return gulp.src(['src/app/mock_data/**/*']).pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/mock_data')));
});

