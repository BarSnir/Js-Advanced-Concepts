/**
 *  Compose - system desing principle.
 *  that deal with realtionship between components.
 *  data --> fn --> data --> fn.
 * @param {number} f 
 * @param {number} g 
 */

const myltiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const compose = (f, g) => (data) => f(g(data)); 
const multipyBy3AndAbs = compose(myltiplyBy3, makePositive);

console.log(multipyBy3AndAbs(-50));

// Pipe fn --> data --> fn --> data
// compose = fn1(fn2(fn3(50)));
// pipe = fn3(fn2(fn1(50)));

// Arity - number of arguments that function takes.
// one or two parameters.