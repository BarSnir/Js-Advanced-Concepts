let view;

function initialize() {
    let called = 0;
    return function() {
        if(called > 0) return;
        called++
        view = '🔑';
        console.log('view has been see!');
    }
}

const start = initialize();
start();
start();
start();
console.log(view);