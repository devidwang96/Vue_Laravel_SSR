const { mix } = require('laravel-mix');

let production = process.env.NODE_ENV == 'production';
let hot = process.env.NODE_ENV == 'hot';

let output =  {

}

!hot ? (output.publicPath = '/') : null;

mix.webpackConfig({
    output
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */



if(process.env.VUE_ENV == 'server') {
    mix
        .js('resources/assets/js/entry-server.js', 'public/js');

    (function(StatsWriterPlugin) {
        if (!StatsWriterPlugin) {
            return;
        }

        mix.plugins['StatsWriterPlugin'] = function(opts) {
            if (opts.filename === 'mix-manifest.json') {
                return {
                    apply: function() {}
                };
            }
            return new StatsWriterPlugin(opts);
        };
    }(mix.plugins['StatsWriterPlugin']));
}

if(process.env.VUE_ENV == 'client'){
    mix
        .js('resources/assets/js/entry-client.js', 'public/js')
        .sass('resources/assets/sass/app.scss', 'public/css')
        .copy('resources/assets/images', 'public/images')
        .copy('resources/assets/fonts', 'public/fonts')
        .browserSync('vue_laravel_cms');

    production &&  mix.version();
}
