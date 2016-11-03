var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});


gulp.task('sass', function(){
  return gulp.src('sass/styles.scss')
    .pipe(sass()) //using gulp sass
    .pipe(gulp.dest('styles'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  // repeat above line for other watchers!
});

gulp.task('default', ['browserSync', 'sass', 'watch' ]);
