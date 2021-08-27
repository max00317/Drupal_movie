const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const gulp_sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
/**
 * Compile all SCSS into CSS.
 */
const sass = () => {
  return gulp.src('sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(gulp_sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('css'));
};
/**
 * Watches custom SASS for changes and compiles.
 */
const sass_watch = () => {
  return gulp.watch('sass/{,**/}*.{scss,sass}', gulp.series(sass));
};

// Task declarations
gulp.task('sass', sass);
gulp.task('sass-watch', sass_watch);
gulp.task('default', gulp.series('sass', 'sass-watch'));
