/**
 * Hoisting in action
 */
var a = 1;
var a = 2;

function aFunc(a){
    return a-1;
}

function aFunc(a){
    return a+1;
}

console.log(aFunc(a));

function bigBrother(){
    function littleBrother() {
      return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
      return 'no me!';
    }
}

console.log(bigBrother());