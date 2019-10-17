// call stack & memory heap
const number = 610; // allocate memory for number.
const string = 'string'; // allocate memory for string.
const object = {
    first : 'Bar',
    last : 'Snir'
}
// allocate memory for object and his values

function subtractTwo(num) {
    return num - 2;
}
function calculate() {
    const sumTotal = 4 + 5;
    return subtractTwo(sumTotal);
}

calculate();