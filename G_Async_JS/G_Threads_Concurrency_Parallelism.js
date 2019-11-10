const Worker = require('worker_threads');
// web-worker
var worker = new Worker.Worker('./workers/worker.js');
worker.postMessage('message');

process.addListener('message', (message)=>{
    console.log(message);
})