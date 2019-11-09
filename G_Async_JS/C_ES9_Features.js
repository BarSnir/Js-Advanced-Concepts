// object spred operator;
const animals = {
    tiger: 23,
    lion: 4,
    monkey:2
};
const { tiger, ...rest } = animals;
console.log(tiger);
console.log(rest);

// function array merge;
function arraySpeard(...array) {
    console.log(array);
}

const array = [1, 2, 3, 4, 5];
const array2 = ['A', 'B', 'C'];
arraySpeard(array, array2);
arraySpeard(animals);