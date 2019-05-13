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
       host: 'laravel-package-development.test',
       proxy: 'laravel-package-development.test',
       browser: "google chrome",
       files: [
           // 'public/js/**/*.js',
           // 'public/css/**/*.css',
           'packages/laravel-ecommerce/public/js/**/*.js',
           // 'packages/laravel-ecommerce/public/css/**/*.css'
       ]
   });
}

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');
