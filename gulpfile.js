var gulp = require('gulp');
var less = require('gulp-less');
var maindata = require('./src/data/main.json');
var browser = require('browser-sync');
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
})
gulp.task('server', function() {
    browser.init({
        server: {

        },
        files: ['src'],
        port: 9999
    })
})
gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['less'])
})