/**
 * immutable - unchangable.
 */
var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);
// pass by value;

let obj1 = {
    name: 'yahoo',
    pass: '123'
}

let obj2 = obj1;
obj2.pass = 'easy';

console.log(obj1, obj2);
// pass by referance;

let array1 = ['a','b','c'];
let array2 = array1;
array2.push('d');
console.log(array1,array2);
// pass by referance;

/** Solutions */

let array3 = [].concat(array2);
array3.push('e');
console.log(array2, array3);

let objA = {a: 'a',b: 'b'};
let objB = Object.assign({},objA);
objB.c = 5;
console.log('Solved Obj!', objA, objB);
let objC = {...objB};
objC.c = 6;
console.log('Solved again', objB, objC);

/** And inner object? shallow clone*/
let objTest = {
    c: {
        name: 'Bar'
    }
}
let objTestB = {...objTest};
objTestB.c.name = 'Meshi';
console.log('opps', objTest, objTestB)

/** solution - Deep cloning */
objTest = {
    c: {
        name: 'Bar'
    }
}
let superClone = JSON.parse(JSON.stringify(objTest));
superClone.c.name = 'Meshi';
console.log('catch ya!', objTest, superClone)
// catuin , very deep object can take from performance;