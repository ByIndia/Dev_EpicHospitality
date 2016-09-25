var gulp = require('gulp');
var useref = require('gulp-useref');//
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var del = require('del');
gulp.task('useref', function(){
  return gulp.src('./*.html')
    .pipe(useref())
        // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('./dist'))
});

gulp.task('copyRootFiles', function(){
  return gulp.src(['./*.+(ico|png|php)'])
  .pipe(gulp.dest('./dist'))
});
gulp.task('copyFont', function(){
  return gulp.src('./font/**/*' )
  .pipe(gulp.dest('./dist/font'))
});
gulp.task('copyFonts',['copyFont'], function(){
  return gulp.src('./fonts/**/*' )
  .pipe(gulp.dest('./dist/fonts'))
});
gulp.task('copyCSS', function(){
  return gulp.src(['./css/AboutUs.css','./css/Index.css','./css/IntegratedMgmtServices.css','./css/LocateUs.css','./css/Services.css'] )
  .pipe(gulp.dest('./dist/css'))
});
gulp.task('images', function(){
  return gulp.src('./images/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/images'))
});
gulp.task('clean:dist', function() {
  return del.sync('dist');
})
gulp.task('default', ['clean:dist','useref', 'copyRootFiles','copyFonts','images','copyCSS']);
