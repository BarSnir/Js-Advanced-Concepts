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
        // this.name => bind and undefined;
        console.log('whooho');
    },
    fun2() {
        return this.name;
    },
    b: function() {
        return this.name;
    }
}

a.function()