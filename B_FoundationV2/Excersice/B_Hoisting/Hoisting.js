// console.log(teddy) --> undifend;
console.log(teddy)
// sing() --> 'lalala';
sing();
/**
 * Its beacuse thoe hoisting is first set an pointer;
 * but not assing the value for the pointer.
 * so whats going to happend...
 * the scope of the variable is dosent set yet,
 * and becuase the function sing() have another scope,
 * it dosent matter where we execute the function.
 */

var teddy = 'bear';
// function declartion;
function sing() {
    console.log('lalala');
}
/**
 * sing2 dosent going to be executed...
 * js see brackets and say, this function wasnt,
 * declare in global.
 */

sing2();
(function sing2() {
    console.log('lalala');
});
// function experssion
var a = function() {
    console.log('lalala');   
}