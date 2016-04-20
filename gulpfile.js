var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix
        .browserSync({
            proxy: 'xs.dev'
        })

        .copy('bower_components/bootstrap-sass/assets/fonts',
            'assets/fonts')
        .copy('bower_components/font-awesome/fonts',
            'assets/fonts/font-awesome')

        .sass('./resources/scss/stylesheet.scss',
            'assets/css/stylesheet.css', './')

        .coffee('./resources/coffee/**/*.coffee',
            'resources/js', './')

        .scripts([
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
            'resources/js/**/*.js'
        ], 'assets/js/script.js', './');

});
