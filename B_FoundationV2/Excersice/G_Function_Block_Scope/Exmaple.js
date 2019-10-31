if(5 > 4) {
    var functionScope = 5;
}
console.log(functionScope);
if(5 > 4) {
    let blockScope = 5;
}
// console.log(blockScope);
/**
 * ReferenceError: blockScope is not defined;
 */