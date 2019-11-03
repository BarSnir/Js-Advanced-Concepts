const multiply = (a, b, c) => a*b*c;
const partialMultiply6 = multiply.bind(null, 6);
const result = partialMultiply6(1, 2);
console.log(result);