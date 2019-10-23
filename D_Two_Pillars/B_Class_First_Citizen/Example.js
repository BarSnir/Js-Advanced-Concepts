/** Function are first calss citizen in js */

// function can be assign to variable or objects;
let a = (num)=> {
    console.log('good',num);
}

// function can get arguments;
a(2)

// also
var stuff = function(num){console.log('hey there',num)};
function b(fn, num) {
    fn(num);
}
b(stuff, 3);

// AND, function can return function...because they are also data.
function c() {
    return function d(){console.log('bye')};
}
c()();