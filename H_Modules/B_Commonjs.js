// Commonjs
var module1 = require('module1');
var module2 = require('module2');

module.exports = {
    fight: module1,
    peace: module2
}

// Browserify --> script.js --> bundle.js;

// AMD - Async Module, made for browser with require.js
define([
    module1,
    module2
], function(import1, import2) {
    var module1 = import1;
    var module2 = import2
    function dance() {
        // do something;
    }
    return {
        dance: dance
    }
});