// High order function --> 
// the ability to return a function& get function;
const hof = (num) => (num) => num * 5;
console.log(hof(5)(5));

const hof2 = (fn) => fn(5);
console.log(hof2(function(num){ return num * 5}));

// Closures --> 
// function that access a varaible defiend out of scope;
const closure = function() {
    let count = 0;
    return function incerment() {
        count++;
        return count;
    }
}

const incerment = closure();
console.log(incerment());
console.log(incerment());
console.log(incerment());