var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/app/*.html'], ['html']);
  gulp.watch(['./src/styles/*.less'], ['less']);
});

gulp.task('less', function () {
  gulp.src('./src/styles/index.less')
  .pipe(less())
  .pipe(gulp.dest('./src/styles/'))
  .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);
