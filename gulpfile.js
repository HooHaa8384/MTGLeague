var gulp =require('gulp'),
    karmaServer = require('karma').Server,
    watch = require('gulp-watch');

gulp.task('jasmine', (done) => {
  new karmaServer({
    configFile: __dirname + "/karma.conf.js",
    singleRun: false
  }, done).start();
});

gulp.task('watch', () => {
  gulp.watch('frontend/test/*.js', ['jasmine']);
});

gulp.task('default', ['jasmine']);
