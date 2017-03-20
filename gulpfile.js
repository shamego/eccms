const elixir = require('laravel-elixir');

// require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 // Include JS from bower
 jsFromBower = (scripts) => {
     bower_scripts = []
     scripts.forEach((script) => {
         bower_scripts.push(`../bower/${script}.js`)
     })
     return bower_scripts
 }

 elixir(function(mix) {
     mix
        .browserSync({
            port: 8097,
            open: 'external',
            host: 'eccms.app',
            proxy: 'https://eccms.app:8096',
            https: true,
            ghostMode: false,
            watchOptions: {
                ignored: '*.php'
            }
        })
         .sass('app.scss')
         .coffee(['resources/assets/coffee/*.coffee', 'resources/assets/coffee/*/*.coffee'])
         .scripts(jsFromBower([
             'jquery/dist/jquery',
             'bootstrap/dist/js/bootstrap.min',
             'angular/angular.min',
             'angular-animate/angular-animate.min',
             'angular-sanitize/angular-sanitize.min',
             'angular-resource/angular-resource.min',
             'angular-aria/angular-aria.min',
             'angular-messages/angular-messages.min',
             'angular-i18n/angular-locale_ru-ru',
             'nprogress/nprogress',
             'underscore/underscore-min',
             'bootstrap-select/dist/js/bootstrap-select',
             'bootstrap-datepicker/dist/js/bootstrap-datepicker',
             'bootstrap-datepicker/dist/locales/bootstrap-datepicker.ru.min',
             'jquery-ui/ui/core',
             'jquery-ui/ui/widget',
             'jquery-ui/ui/mouse',
             'jquery-ui/ui/sortable',
             'jquery-ui/ui/draggable',
             'jquery-ui/ui/droppable',
             'angular-ui-sortable/sortable.min',
             'angular-bootstrap/ui-bootstrap-tpls.min',
             'cropper/dist/cropper',
             'ladda/dist/spin.min',
             'ladda/dist/ladda.min',
             'angular-ladda/dist/angular-ladda.min',
             'remarkable-bootstrap-notify/dist/bootstrap-notify.min',
             'StickyTableHeaders/js/jquery.stickytableheaders',
             'jquery.floatThead/dist/jquery.floatThead.min',
             'jsSHA/src/sha256',
             'jquery.cookie/jquery.cookie',
             'ace-builds/src/ace',
             'ace-builds/src/mode-html',
             'ace-builds/src/mode-json',
             'ace/lib/ace/commands/default_commands',
             'angular-file-upload/dist/angular-file-upload.min',
             'jquery.maskedinput/dist/jquery.maskedinput.min',
             'angucomplete-alt/dist/angucomplete-alt.min'
         ]).concat(['resources/assets/js/*.js']), 'public/js/vendor.js');
 });
