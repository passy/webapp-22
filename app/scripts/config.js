require.config({

    // Initialize the application with the main application file.
    deps: ['main'],

    paths: {
        // JavaScript vendor folder.
        'vendor': '../scripts/vendor',

        // Libraries.
        'backbone': '../components/backbone/backbone',
        'backbone.marionette': '../components/backbone.marionette/lib/backbone.marionette',
        'handlebars':  '../components/handlebars/handlebars',
        'jquery': '../components/jquery/jquery',
        'lodash': '../components/lodash/lodash',
        'modernizr': '../components/modernizr/modernizr',
        'requirejs': '../components/requirejs/requirejs',
        'text': '../components/requirejs-text/text',
        //'underscore.string': '../components/underscore.string/lib/underscore.string',

        // Bootstrap Plugins.
        'bootstrap-button': '../components/sass-bootstrap/js/bootstrap-button'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },

        'backbone': {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        },

        'backbone.marionette' : {
            deps: ['backbone'],
            exports : 'Backbone.Marionette'
        },

        'bootstrap-button' : {
            deps : ['jquery']
        },

        'handlebars' : {
            exports : 'Handlebars'
        }
    }
});
