/** Primitiv Types */
// int
5;

// boolean 
true;

// string
'text';

// undefined - default value of memory;
undefined

// Object - is a mistake.
null

// Symbol - indetifty an object;
Symbol('jsut me');


/** Non Primitive Types */
// Object;
const a = {};
const c = [];

// function --> is an object; 
function b() {
    console.log('here');
}
b.message = 'hey';
console.log(b.message);

/** Object in Primitive Types */
let d = Boolean(true).toString();
console.log(d);
let e = String(true).toString();
console.log(e);