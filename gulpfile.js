'use strict';

//Load all Gulp modules
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect');




gulp.task('devServer', function () {
  connect.server({
    root: [__dirname],
    port: 8000,
    livereload: true
  });
});


//update HTML with livereload
gulp.task('html', function(){
	  gulp.src('index.html')
    	.pipe(plumber())
    	.pipe(connect.reload());
});

//update CSS with livereload
//update HTML with livereload
gulp.task('css', function(){
    gulp.src('main.css')
      .pipe(plumber())
      .pipe(connect.reload());
});

//watch task to re-run other tasks on save
gulp.task('watch', function() {
  gulp.watch('main.css',['css']);
  gulp.watch(['index.html'], ['html']);
});





//task to run all
gulp.task('default', ['devServer', 'watch']);
gulp.task('build',['sass','minify-html','minify-css','minify-img']);