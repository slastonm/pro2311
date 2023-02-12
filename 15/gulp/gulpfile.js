
const {src, dest, series, parallel, watch} = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));

// function move(){
//     return src('app/index.html')
//     .pipe(dest('dist/'));
// }
// function moveStyle(){
//     return src('app/style/**/*.css')
//     .pipe(dest('dist/new-style/'));
// }
function move(){
    return src(['app/index.html', 'app/style/**/*.css'])
    .pipe(dest('dist/'));
}
// function move(){
//     return src(['app/index.html', 'app/style/**/*.css', '!app/style/*.scss'])
//     .pipe(dest('dist/'));
// }
// function styleNotify(){
//     return src('app/style/style.css')
//     .pipe(rename('main.css'))
//     .pipe(dest('dist/new-style/'));
// }

function scssToCss(){
    return src('app/style/main.scss')
    .pipe(plumber())
    .pipe(rename('compiled-style.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('app/style/'));
}

function watchman(){
    browserSync.init({
        server:{
            baseDir:"./dist"
        }
    })
    watch("app/style/main.scss", scssToCss);
    // watch("app/style/**/*.css", {delay:2000}, styleNotify);
    // watch("dist/**/*.*").on('change', browserSync.reload);

    // watch("app/*", {events:'addDir'}, function(cb){
    //     console.log('New dir');
    //     cb();
    // })

}

exports.default = series(move, watchman);
