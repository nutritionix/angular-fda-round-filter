'use strict';

const fs = require('fs-extra');
const bowerJson = JSON.parse(fs.readFileSync(__dirname + '/bower.json'));

const libFile = bowerJson['main'];

const gulp = require('gulp');
gulp.plugins = require('gulp-load-plugins')();

gulp.task('build', function () {

  return gulp.src(libFile)
    .pipe(gulp.plugins.ngAnnotate())
    .pipe(gulp.plugins.rename(libFile.replace('.js', '.min.js')))
    .pipe(gulp.plugins.uglify({preserveComments: 'some'}))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['build'], function () {

});
