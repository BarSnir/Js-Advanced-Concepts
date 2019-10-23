// A) invoking function
function one() {
    return 1;
}

one();

// B) a method execution;
const obj = {
    two() {
        return 2;
    }
}

// C) call & apply
function three() {
    return 3;
}

three.call();

// D) the confiusuing way, function constructor.
const four = new Function('num', 'return num');
console.log(four(4));

/** Its beacuse function are callable objects */


const a = {
    name: 'whooho',
    function: () => {
        console.log('whooho');
    }
}

a.function()