var elixir = require('laravel-elixir');
var paths = {
    bootstrap: {
        dist: 'node_modules/bootstrap/dist/',
        less: 'node_modules/bootstrap/less/',
        files: {
            jsmin: 'node_modules/bootstrap/dist/js/bootstrap.min.js'
        }
    },
    jquery: {
        dist: 'node_modules/jquery/dist/',
        files: {
            jsmin: 'node_modules/jquery/dist/jquery.min.js'
        }
    },
    fontawesome: {
        css: 'node_modules/font-awesome/css/',
        fonts: 'node_modules/font-awesome/fonts/',
        less: 'node_modules/font-awesome/less/'
    },
    resources: {
        bootstrap: 'resources/assets/less/bootstrap/',
        fontawesome: 'resources/assets/less/font-awesome/',
        js: 'resources/assets/js/'
    },
    public: {
        document_root: 'public/',
        assets: 'public/assets/',
        js: 'public/assets/js/',
        css: 'public/assets/css/'
    }
};

elixir(function(mix) {

    // Copy Resources

    // Bootstrap
    mix.copy(paths.bootstrap.less, paths.resources.bootstrap);
    mix.copy(paths.bootstrap.files.jsmin, paths.resources.js);

    // JQuery
    mix.copy(paths.jquery.files.jsmin, paths.resources.js);

    // Font Awesome
    mix.copy(paths.fontawesome.less, paths.resources.fontawesome);

    // Copy Assets
    mix.copy(paths.fontawesome.fonts, paths.public.assets + 'fonts/');

    // Join JS
    mix.scripts([
        paths.resources.js + 'jquery.min.js',
        paths.resources.js + 'bootstrap.min.js',
        paths.resources.js + 'app.js'
    ], paths.public.js);

    // Compile LESS
    mix.less('app.less', paths.public.css, {
        compress: false
    });

    mix.browserSync({
        proxy: 'homestead.app'
    });

});
