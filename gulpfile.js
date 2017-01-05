var gulp =require('gulp'),
    jasmine = require('gulp-jasmine'),
    watch = require('gulp-watch');

gulp.task('jasmine', () => {
  return gulp.src('frontend/test/*.js')
    .pipe(jasmine());
});

gulp.task('watch', () => {
  gulp.watch('frontend/test/*.js', ['jasmine']);
});

gulp.task('default', ['jasmine', 'watch']);
