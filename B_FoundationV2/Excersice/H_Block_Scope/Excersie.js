function loop() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('final',i)
}

console.log(loop());

// function loop2() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('final',i)
// }

// console.log(loop2());

/**
 * ReferenceError: i is not defined;
 */