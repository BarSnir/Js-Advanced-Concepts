'use strict'
function weird() {
    var height = 50;
    /**
     * leakage of global variable;
     */
    return height;
}

var a = function doodle() {
    console.log('doing somthing');
}

console.log(weird());
a();
// doodle() --> is not defined;