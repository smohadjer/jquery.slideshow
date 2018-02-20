var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('src/*.scss', ['sass']);
	gulp.watch('src/*.js', ['copy:js']);
});
