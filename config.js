var config = {
    port: 3000,
    staticDir: 'build',
    rootDir: __dirname,

    mysql: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'lab1_music_store'
    },

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
        transformUrl: function (url) {
            return url.match(/[^\/]*\.html$/)[0];
        }
    }
};

module.exports = config;
