const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
	gulp.src('scss/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'));
})

gulp.task('sass:watch', function () {
	gulp.watch('scss/style.sass', gulp.series('sass'))
})