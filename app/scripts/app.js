/*global define */
define([], function () {
    'use strict';

    return {
        start: function () {
            console.log(Array.prototype.slice.apply(arguments));
        }
    };
});
