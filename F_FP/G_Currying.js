/**
 * currying - Currying is a process in functional programming 
 * in which we can transform a function with multiple arguments 
 * into a sequence of nesting functions
 */
const multiply = (a, b) => a*b;
console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => a*b;
console.log(curriedMultiply(3)(4));