require([
		'jquery',
		'lodash',
		'backbone',

		// Application.
		'app',

		// Load Routers.
		// 'routers/router'
	],

	function ($, _, Backbone, app) {
		'use strict';

		// Use jquery's document ready function to start
		// the app as soon as the DOM was fully loaded.
		$(function () {
			app.start({
				root: window.location.pathname,
				bootstrap: window.bootstrap || [],
				tracker: window._gaq || []
			});
		});
	}
);
