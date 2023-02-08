'use strict';

const gulp = require('gulp'),
    watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sassMin', function () {
    return gulp.src('./src/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./src/styles.scss',gulp.series(['sassMin']))
});