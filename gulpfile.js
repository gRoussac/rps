const gulp = require('gulp');
const minify = require('minify');
const mocha = require('gulp-mocha');

gulp.task('default', ['mocha']);

gulp.task('watch', function() {
	gulp.watch(['scripts/**', 'tests/**'], ['mocha']);
});


// gulp.task('minify', function() {
//   var stream = gulp.src('scripts/**/*.js')
//     .pipe(minify())
//     .pipe(gulp.dest('min'));
//   return stream;
// });

gulp.task('mocha', function() {
  return gulp.src(['tests/test_*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('chai')
      }
    }));
});