function fail() {
    try {
        console.log('This custom error works');
        throw new Error('404');
    }
    catch(error) {
        console.log('we have made an error', error);
    }
    finally {
        console.log('Still Good');
        return 'failed 😄';
    }
}

console.log(fail());