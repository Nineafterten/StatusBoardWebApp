var gulp =          require("gulp");
var clean =         require("gulp-clean");
var copy =          require("gulp-copy");
var concat =        require("gulp-concat");
var connect =       require("gulp-connect");
var less =          require("gulp-less");
var notify =        require("gulp-notify");
var plumber =       require("gulp-plumber");
var sourcemaps =    require("gulp-sourcemaps");

// connect to the local server
gulp.task("connect", function() {
    connect.server({
        root: "build",
        livereload: true,
        port: 7000
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
        "./src/app/**/**/*.html",
        "./src/app/**/**/*.svg",
        "./src/app/**/**/*.png",
        "./src/app/**/**/*.jpg",
        "./src/app/**/**/*.gif"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Html: <%= error.message %>")
    }))
    .pipe(gulp.dest("build/"))
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
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());
});

// update and recompile when js files change
gulp.task("scripts", function() {
    gulp.src([
        "./src/app/app.module.js",
        "./src/app/components/**/*.js",
        "./bower_components/jquery/dist/jquery.min.js",
        "./bower_components/bootstrap/dist/js/bootstrap.min.js",
        "./bower_components/lodash/lodash.min.js"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Scripts: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(concat("index.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("build/"))
    .pipe(connect.reload());
});

gulp.task("copy", function() {
    gulp.src([
        "./bower_components/**/*",
        "./node_modules/**/*"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Copy: <%= error.message %>")
    }))
    .pipe(copy("build/"));
});

gulp.task("clean", function() {
    gulp.src("build/")
    .pipe(plumber({
        errorHandler: notify.onError("Clean: <%= error.message %>")
    }))
    .pipe(clean());
});

// default task - connect and start watching
gulp.task("default", ["copy", "html", "styles", "scripts", "connect", "watch"]);
