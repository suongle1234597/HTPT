var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;
 
 var sass = require('gulp-sass');
 //style paths
var sassFiles = 'sass/*.scss',
cssDest = 'css';

gulp.task('styles', function(){
gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('sass',function() {
    gulp.watch(sassFiles,['styles']);
});

gulp.task('serve', [], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });    
    gulp.watch(['*.html'], reload);
    gulp.watch(['js/*.js'], reload);
    gulp.watch(['css/*.css'], reload);
    gulp.watch(sassFiles, ['sass'] ,reload ); 
   
});