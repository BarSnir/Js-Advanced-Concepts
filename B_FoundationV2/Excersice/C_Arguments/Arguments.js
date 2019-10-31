function marry(personA, personB) {
    console.log('arguemtns real stracture A:',arguments);
    return Array.from(arguments);
}

function marry2(...args) {
    console.log('arguemtns real stracture B:',args);
    return Array.from(arguments);
}

console.log(marry('John', 'Doe'));
console.log(marry2('John', 'Doe'));