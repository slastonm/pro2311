// function hello(cb){
//     console.log("Hello gulp");
//     cb();
//     // return "Hello"
// }
// function world(cb){
//     console.log("Hello !!!!!!");
//     cb();
//     // return "Hello"
// }
// exports.world = world;
// exports.default = hello;


var path={
    images:'img/*.png',
    css:'style/*.css',
    buildImg:'dist/img',
    buildStyle:'dist/style'
}
// === old ===
// var gulp = require('gulp');



// gulp.task('images', () =>

//   gulp.src(path.images)
//     // .other plugins
//     .pipe(gulp.dest(path.buildImg))

// );
// gulp.task('css', () =>

//   gulp.src(path.css)
//     // .other plugins
//     .pipe(gulp.dest(path.buildStyle))

// );
// gulp.task("default", ["css", "images"]);


//  === new 
const {src, dest, series, parallel} = require('gulp');

function images(){
    return src(path.images)
    // plugins
    .pipe(dest(path.buildImg));
}

function css(){
    return src(path.css)
    // plugin
    .pipe(dest(path.buildStyle));
}

exports.paral = parallel(images, css);
exports.default = series(images, css);
