// including plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


 


gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: 'nested',
          includePaths: ['node_modules/susy/sass','node_modules/breakpoint-sass/stylesheets','node_modules/normalize.css'],
      }).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  // Other watchers
})