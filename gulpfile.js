var gulp =require('gulp'),
    jasmine = require('gulp-jasmine'),
    watch = require('gulp-watch');

gulp.task('jasmine', () => {
  return gulp.src('frontend/test/*.js')
    .pipe(jasmine({"verbose" : true, "config": {"helpers": ["../src/test.js"]}}));
});

gulp.task('watch', () => {
  gulp.watch('frontend/test/*.js', ['jasmine']);
});

gulp.task('default', ['jasmine', 'watch']);
