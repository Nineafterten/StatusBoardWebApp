var gulp =          require("gulp");
var concat =        require("gulp-concat");
var connect =       require("gulp-connect");
var less =          require("gulp-less");
var notify =        require("gulp-notify");
var plumber =       require("gulp-plumber");
var sourcemaps =    require("gulp-sourcemaps");

gulp.task("connect", function() {
    connect.server({
        livereload: true
    });
});

gulp.task("watch", function () {
    gulp.watch(["./src/app/*.html"], ["html"]);
    gulp.watch([
        "./src/app/**/*.less",
        "./src/styles/*.less",
        "./src/styles/**/*.less"
    ], ["less-compiler"]);
});

gulp.task("html", function () {
    gulp.src("./src/app/*.html")
        .pipe(connect.reload());
});

gulp.task("less-compiler", function () {
    gulp.src([
        "./src/app/**/*.less",
        "./src/styles/*.less",
        "./src/styles/**/*.less"
    ])
    .pipe(plumber({
        errorHandler: notify.onError("Less Compiler: <%= error.message %>")
    }))
    .pipe(sourcemaps.init())
    .pipe(less([
            "./src/styles/",
            "../bower_components/bootstrap/less",
            "../bower_components/font-awesome/less"
        ]
    ))
    .pipe(concat("index.css"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./src/styles/"))
    .pipe(connect.reload());
});

gulp.task("default", ["connect", "watch"]);
