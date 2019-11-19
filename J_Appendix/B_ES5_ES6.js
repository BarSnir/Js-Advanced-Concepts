let variant1 = 100;

if(variant1 > 90) {
    console.log("let it down");
    let someLetVariant = "😎";
}

try {
    console.log(someLetVariant);
} catch(e) {
    console.log("didn't work ha?");
}


var variant2 = 100;if(variant1 > 90) {
    console.log("let it down");
    var someVarVariant = "😎";
}

try {
    console.log(someVarVariant," And this is the var keyword");
} catch(e) {
    console.log("didn't work ha?");
}

const obj = {
    name:"bar",
    password: "12345"
}

const { name, ...pass } = obj;
console.log(name);
console.log(pass);

const obj2 = {
    a: "a",
    [obj.name]:"Snir",
}

console.log(obj2);

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("bar");

//  Arrow function
const add = (a, b) => a + b;
console.log(add(1, 3));