// requirements
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    path = require('path');

var themeName = 'expanse';

gulp.task('less', function(){
    // less
    gulp.src('./assets/less/' + themeName + '.less')
        .pipe(less({ paths: [path.join(__dirname, 'less', 'includes')]}))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/less/**/*.less',['less']);
    gulp.watch('./assets/js//**/*.js',['build']);
});

gulp.task('minify',function(){
    // uglify
    gulp.src('./assets/js/' + themeName + '.js')
        .pipe(uglify())
        .pipe(rename(themeName + '.min.js'))
        .pipe(gulp.dest('./assets/js/'));
});

gulp.task('default',['less','watch']);
gulp.task('build',['less','minify']);