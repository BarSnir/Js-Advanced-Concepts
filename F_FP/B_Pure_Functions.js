/**
 * 1.no side effect.
 * 2.input with the same output: Referential Transparency.
 */
const array = [1, 2, 3];
function removeLastItem(arr) {
    const newArray = [].concat(arr);
    newArray.pop();
    return newArray;
}
function multiplyBy2(arr) {
    const newArray = [].concat(arr);
    return newArray.map(value => value * 2);
}

console.log(removeLastItem(array));
console.log(multiplyBy2(array));