var gulp = require('gulp'),
	runSequence = require('run-sequence'),
	requireDir = require('require-dir');

// Require all tasks.
requireDir('./gulp-tasks', { recurse: true });

gulp.task('build:dev', ['copy:libs', 'copy:js', 'copy:img', 'sass'], function() {

});

gulp.task('build', function(callback) {
	runSequence(
		['clean'],
		['build:dev'], callback);
});

gulp.task('serve', function(callback) {
	runSequence(
		['clean'],
		['build:dev'],
		'watch', callback);
});
