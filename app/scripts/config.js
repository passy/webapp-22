require.config({

    // Initialize the application with the main application file.
    deps: ['main'],

    paths: {
        // Libraries.
        'jquery': '../components/jquery/jquery',
        'modernizr': '../components/modernizr/modernizr',
        'requirejs': '../components/requirejs/requirejs',
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
    }
});
