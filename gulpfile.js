var gulp 	= require('gulp');
var stylus 	= require('gulp-stylus');
var rename 	= require('gulp-rename');
var babel 	= require('babelify');
var browserify 	= require('browserify');
var source 	= require('vinyl-source-stream');
//var watchify = require('watchify');

gulp.task('styles', function(){
	gulp
		.src('assets/css/main.styl')
		.pipe(stylus())
		.pipe(rename('mainApp.css'))
		.pipe(gulp.dest('public/css/'));
})

gulp.task('assets', function(){
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

gulp.task('imagenes', function(){
	gulp
		.src('assets/img'+'/**/*')
		.pipe(gulp.dest('public/img/'));
})

gulp.task('todoslosjs', function(){
	gulp
		.src(['assets/js'+'/**/*','!assets/js/main.js'])
		.pipe(gulp.dest('public/js/'));
})

gulp.task('scripts', function(){
	browserify('assets/js/main.js')
		.transform(babel, {presets: ["es2015"]})
		.bundle()
		.pipe(source('main.js'))
		.pipe(rename('mainApp.js'))
		.pipe(gulp.dest('public/js/'));
})


/*function compile(watch){
	var bundle = watchify(browserify('assets/js/main.js'));

	function rebundle(){
		bundle
			.transform(babel, {presets: ["es2015"]})
			.bundle()
			.pipe(source('main.js'))
			.pipe(rename('mainApp.js'))
			.pipe(gulp.dest('public/js/'));
	}
	if(watch){
		bundle.on('update', function(){
			console.log('---> Bundling...');
			rebundle();
		})
	}
	rebundle();
}


gulp.task('build', function(){
	return compile();
})
gulp.task('watch', function(){
	return compile(true);
})
*/


gulp.task('default', ['styles','assets','imagenes','todoslosjs','scripts'])

