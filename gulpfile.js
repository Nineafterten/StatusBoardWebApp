var gulp =          require("gulp");
var concat =        require("gulp-concat");
var connect =       require("gulp-connect");
var less =          require("gulp-less");
var notify =        require("gulp-notify");
var plumber =       require("gulp-plumber");
var sourcemaps =    require("gulp-sourcemaps");

// connect to the local server
gulp.task("connect", function() {
    connect.server({
        livereload: true
    });
});

// watch for html, less, and js file changes
gulp.task("watch", function () {
    gulp.watch([
        "./src/app/*.html",
        "./src/app/**/*.html",
        "./src/app/**/**/*.html"
    ], ["html"]);
    gulp.watch([
        "./src/app/**/*.less",
        "./src/styles/*.less",
        "./src/styles/**/*.less"
    ], ["styles"]);
    gulp.watch([
        "./src/app/app.module.js",
        "./src/app/components/**/*.js",
    ], ["scripts"]);
});

// update when html files change
gulp.task("html", function () {
    gulp.src([
        "./src/app/*.html",
        "./src/app/**/*.html",
        "./src/app/**/**/*.html"
    ])
    .pipe(connect.reload());
});

// update and recompile when less files change
gulp.task("styles", function () {
    gulp.src([
        "./src/app/**/*.less",
        "./src/styles/*.less",
        "./src/styles/**/*.less"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Styles: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(less("./src/styles/"))
    .pipe(concat("index.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/styles/"))
    .pipe(connect.reload());
});

// update and recompile when js files change
gulp.task("scripts", function() {
    gulp.src([
        "./src/app/app.module.js",
        "./src/app/components/**/*.js"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Scripts: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(concat("index.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/app/"))
    .pipe(connect.reload());
});

// default task - connect and start watching
gulp.task("default", ["connect", "watch"]);
