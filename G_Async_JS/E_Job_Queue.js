// web-api / libuv
setTimeout(()=> console.log('hey1'), 0);

// Job queue / Microtask Queue
Promise.resolve('hey2').then((str) => console.log(str));

// Sync code
console.log('hey3');