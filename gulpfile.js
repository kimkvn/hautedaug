var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
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

gulp.task('sass', function(){
  return gulp.src('sass/styles.scss')
    .pipe(sass()) //using gulp sass
    .pipe(gulp.dest('styles'))
});

gulp.task('hello', function(){
  console.log('SUP FUCKERS');
});
