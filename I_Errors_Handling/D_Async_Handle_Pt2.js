(async function() {
    try {
        await Promise.resolve('Hey');
        await Promise.reject('error');
    }
    catch(err) {
        console.log(err.message);
    }
    console.log('Still Good?');
})();