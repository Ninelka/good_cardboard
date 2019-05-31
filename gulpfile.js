var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concatCss    = require('gulp-concat-css');
var cleanCss     = require('gulp-clean-css');


// Compile sass into CSS & auto-inject into browsers

gulp.task('sass', function(done) {
    gulp.src("src/scss/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concatCss('style.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
    done();
});

// Static Server + watching scss/html files

gulp.task('serve', function(done) {

    browserSync.init({
        server: "src/"
    });

    gulp.watch("src/scss/*.scss", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', () => {
      browserSync.reload();
      done();
    });
    done();
});


gulp.task('default', gulp.series('sass', 'serve'));