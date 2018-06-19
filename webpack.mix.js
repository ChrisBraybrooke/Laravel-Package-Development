let mix = require('laravel-mix');

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

if (!mix.inProduction()) {
   mix.browserSync({
       open: 'external',
       host: 'laravel-ecommerce.test',
       proxy: 'laravel-ecommerce.test',
       browser: "google chrome",
       files: [
           'resources/views/**/*.php',
           'public/js/**/*.js',
           'public/css/**/*.css',
           'packages/**/public/js/**/*.js',
           'packages/**/public/css/**/*.css',
           'packages/**/**/**/*.php', 
       ]
   });
}

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
