/**
 * Created by tasnim.reza on 28-Mar-16.
 */
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function () {
    return gulp.src('/*/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('scss/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('dist/css'));
// });

// Concatenate & Minify JS
gulp.task('scripts', function () {

    gulp.src(['src/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));

    // Copy vendor files
    gulp.src(['node_modules/jquery/dist/jquery.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/angular/angular.min.js'])
        .pipe(gulp.dest('dist/js/vendor'));

});


// Copy all static assets
gulp.task('copy', function () {
    gulp.src('src/site/**')
        .pipe(gulp.dest('dist/site'));

    // gulp.src('client/css/**')
    //     .pipe(gulp.dest('build/css'));

    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});


// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('js/*.js', ['lint', 'scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);