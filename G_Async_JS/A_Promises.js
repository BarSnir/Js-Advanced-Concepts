/**
 * A promise is am object that may produce 
 * a single value some time in the future.
 * Either an result value or reject value.
 * Status - Fullfilled, rejected & pending.
 */

//Promise
const fetch = require("node-fetch");

const promise = new Promise((res, rej)=>{
    if(true){
        res('its working');
    }
    rej('Error was occured');
});

const promise2 = new Promise((res, rej)=>{
    setTimeout(res, 1000, 'Hey there');
})

const promise3 = new Promise((res, rej)=>{
    setTimeout(res, 2000, 'Hey there again');
})

const promise4 = new Promise((res, rej)=>{
    setTimeout(res, 3000, 'Bye!');
})

promise
.then(data =>  data+'!')
.then(data =>  data+'?')
.then(data => console.log(data))
.then((data)=> {
    throw Error;
}).catch(()=>{
    console.log('Error');
});

Promise.all([promise, promise2, promise3, promise4])
.then((values)=> {
    console.log(values);
});

const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    'https://jsonplaceholder.typicode.com/albums'
];
const bab = 'bab';
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json());
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
    console.log(bab);
})