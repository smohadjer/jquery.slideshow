var gulp = require('gulp'),
	npmDist = require('gulp-npm-dist');

gulp.task('copy:img', function() {
	var stream = gulp.src('src/img/**/*')
		.pipe(gulp.dest('dist/img'));
	return stream;
});

gulp.task('copy:js', function() {
	var stream = gulp.src('src/*.js')
		.pipe(gulp.dest('dist'));
	return stream;
});

// copy package.json dependencies to .tmp
gulp.task('copy:libs', function() {
  gulp.src(npmDist({
		"copyUnminified": true
  }), {base:'./node_modules'})
    .pipe(gulp.dest('./demo/vendor'));
});
