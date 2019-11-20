const array = [1, 2, 15, 44, 68, 79];

const mappedArray = array.map((num) => num * 2);
console.log("map--> 🗺 : ", mappedArray);

const filteredArray = array.filter((num) => num > 21);
console.log("filter--> 🚬 : ", filteredArray);

const reducedArray = array.reduce((accumulator, num) => {
    return accumulator + num;
},0);
console.log("reduce--> 🗳 : ", reducedArray);