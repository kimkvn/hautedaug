var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// gulp.task('browser-sync', function(){
//   browserSync.init({
//     server: {
//       baseDir: "./"
//     }
//   });
// });

// gulp.task('watch', ['browser-sync'], function(){
//   gulp.watch('*.html').on('change', browserSync.reload);
// });

gulp.task('styles', function(){
  gulp.src('/sass/*.scss').pipe(sass().on('error', sass.logError)).pipe(gulp.dest('./css'))
});
