function two() {
    var isValid;
}

function one() {
    var isValid = true;
    // local env;
    two();
    // new context;
}

var isValid = false;
// global execution;
one();
// new context;