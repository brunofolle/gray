var gulp          = require('gulp');
var browserSync   = require('browser-sync').create();
var $             = require('gulp-load-plugins')();
var autoprefixer  = require('autoprefixer');
var sass          = require('gulp-sass');
var clean         = require('gulp-clean');
var uglify        = require('gulp-uglify');

const concat      = require('gulp-concat');
const rev         = require('gulp-rev');


var del = require('del');

var sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

// tarefa css ou gulp css na linha de comando
gulp.task('css', function () {
  gulp.src('assets/css/app.min.css')
    .pipe(clean({force: true}))
  return gulp.src(['_sass/app.scss',
                   ])
    // concatena os arquivos para gerar o app.min.css
    .pipe(concat('app.min.css'))
    // compila o sass
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('assets/css/'));
});

// tarefa js ou gulp js na linha de comando
gulp.task('js', function() {
  gulp.src('assets/js/app.min.js')
    .pipe(clean({force: true}))
  return gulp.src([ 'assets/js/jquery-3.3.1.min.js',
                  // Essencial
                  'node_modules/foundation-sites/dist/js/foundation.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.core.js',
                  //  librarys
                  'node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.js',
                  //  plugins
                  'node_modules/foundation-sites/dist/js/plugins/foundation.sticky.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.reveal.js',
                  'node_modules/foundation-sites/dist/js/plugins/foundation.accordion.js',

                  'assets/js/search.js',
                  'assets/js/app.js'], 
                   { sourcemaps: true })
    // concatena os arquivos para gerar o app.min.js
    .pipe(concat('app.min.js'))
    // compila todos para um unico arquivo
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/'))
});

