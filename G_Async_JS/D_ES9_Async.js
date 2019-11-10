const fetch = require("node-fetch");

// finally after catch or resloved;
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];
// Promise.all(urls.map(url => {
//     return fetch(url).then(resp => resp.json());
// }))
// .then(results => {
//     console.log(results[0]);
// })
// .finally( ()=> console.log('extra'));

//  OR... 
const getData = async function() {
    try {
        const [ users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json());
        }));
        console.log(users);
        console.log(posts);
        console.log(albums);
        console.log('getData');
    } catch(err) {
        console.log('opps');
    }
}
// OR...
const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
        console.log('getData2');
    }
}

getData();
getData2();