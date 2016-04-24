var config = {
    port: 3000,
    staticDir: 'build',

    js: [ './app/app.js' ],
    index: [ './app/index.html' ],
    html: [ './app/**/*.html', '!./app/index.html' ],
    libs: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap/dist/css/bootstrap.min.css',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/angular-route/angular-route.min.js'
    ],

    templateCache: {
        standalone: true,
        base: './'
    }
};

module.exports = config;
