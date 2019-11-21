const array = [1, 2, 3, 4, 5 ,6, "apples", "oranges" ];

//  for of loop --> Iterating through iterables;
for (item of array) {
    console.log(item);
}

for (item of "array") {
    console.log(item);
}


//  for in loop --> work with object, enumerating & enumerable;
const object = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

for (item in object) {
    console.log(item," amount of ",object[item]);
}