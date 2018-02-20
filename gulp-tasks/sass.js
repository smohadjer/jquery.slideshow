var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
	var stream = gulp.src('src/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		//.pipe(sourcemaps.write('./maps'))
		//.pipe(cssHint())
		.pipe(gulp.dest('dist'));

	return stream;
});
