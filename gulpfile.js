var gulp = require('gulp');
var vulcanize = require('gulp-vulcanize');

gulp.task('vulcanize', function () {
  return gulp.src('public/elements.html')
    .pipe(vulcanize({
      abspath: '',
      excludes: [],
      stripExcludes: false,
      stripComments: true,
      inlineScripts: true,
      inlineCss: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['vulcanize'], function () {
  gulp.watch('dist/index.html', ['vulcanize']);
  gulp.watch('public/elements.html', ['vulcanize']);
});
