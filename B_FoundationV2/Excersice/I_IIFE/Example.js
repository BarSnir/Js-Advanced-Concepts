/**
 * IIFE - Immidatly Invoke Function Exprerssion;
 */

// function experssion --> anonymous();
(function() {
    var a = 1;
})();

// function declartion;
// function(){}(); bad syntax;
var script1 = (function(num) {
    function a(){
        return 5+num;
    }
    return {
        a: a
    }
})(5);
// if we supply the parmater to to function,
// we are having more preformance. cause we dosent,
// have to search the variable in the scope chain.
function a() {
    return 6;
}

console.log(script1.a());
console.log(a());