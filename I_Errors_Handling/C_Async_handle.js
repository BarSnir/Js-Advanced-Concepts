Promise.resolve('async fail')
.then(resp => {
    return Promise.resolve().then(()=>{
        return new Error('Err from promise')
    })
})
.then( resp => {
    if(resp instanceof Error) {
        throw resp;
    }
    console.log('From fine', resp)
})
.catch( err => {
    console.log('From error', err);
    return err;
})
.then( resp => {
    console.log('Fine says...', resp.message);
    throw new Error();
})
.catch( err => {
    console.log('Final Error');
})
