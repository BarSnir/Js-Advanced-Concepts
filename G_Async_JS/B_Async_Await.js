// built on promises in es8;
const fetch = require("node-fetch");

async function getResults() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const data = await resp.json();
    console.log(data);
} 
getResults();

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json());
        }));
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch(err) {
        console.log(err.message);
    }
}

getData();