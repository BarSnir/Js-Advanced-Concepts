const obj = {
    name: 'Bar'
};

function cloneObj(obj) {
    return {...obj}; // pure;
}

function updateName(obj) {
    const clonedObj = cloneObj(obj);// pure;
    clonedObj.name = 'Nana'; // no mutation;
    return clonedObj;
}

// mutation --> obj.name = 'Nana';
console.log(updateName(obj));