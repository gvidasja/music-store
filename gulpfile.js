var gulp = require( 'gulp' );
var watchify = require( 'watchify' );
var browserify = require( 'browserify' );
var sourcemaps = require( 'gulp-sourcemaps' );
var source = require( 'vinyl-source-stream' );
var buffer = require( 'vinyl-buffer' );
var babelify = require( 'babelify' );
var concat = require( 'gulp-concat' );
var annotate = require( 'gulp-ng-annotate' );
var inject = require( 'gulp-inject' );
var seq = require( 'run-sequence' );
var templateCache = require( 'gulp-angular-templatecache');

var config = require( './config' );

function compile( watch ) {
    var bundle = watchify( browserify( config.js ) )
        .transform( babelify, {
            presets: [ 'es2015' ]
        } );

    if( watch ) {
        bundle.on( 'update', () => {
            buildJs( bundle );
        } )
    }

    return buildJs( bundle );
}

function buildJs( browserifiedBundle ) {

    browserifiedBundle.bundle()
        .pipe( source( 'app.js' ) )
        .pipe( buffer() )
        .pipe( annotate() )
        .pipe( sourcemaps.init() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( config.staticDir ) );
}

function buildHtml() {
    return gulp.src( config.html )
        .pipe( templateCache( config.templateCache ) )
        .pipe( gulp.dest( `${config.staticDir}` ) );
}

function buildLibs() {
    return gulp.src( config.libs )
        .pipe( gulp.dest( `./${config.staticDir}/libs` ) );
}

gulp.task('watch', function() {
    gulp.watch(config.html[0], ['html']);
});

gulp.task( 'compile', () => compile( false ) );
gulp.task( 'compile-watch', () => compile( true ) );
gulp.task( 'html', () => buildHtml() );
gulp.task( 'libs', () => buildLibs() );

gulp.task( 'prod', () => {
    return seq( 'libs', 'html', [ 'compile' ] );
} );

gulp.task( 'dev', () => {
    return seq( 'libs', 'html', [ 'compile-watch', 'watch' ] );
} );