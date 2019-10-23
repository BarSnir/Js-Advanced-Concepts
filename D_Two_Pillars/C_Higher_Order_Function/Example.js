/** function can take a fucntion as argument or return one */
const giveAccessTo = (user) => {
    return `${user} Logged in`;
}

function letUserLogIn(user) {
    let array = [];
    for(let i=0; i < 10000000; i++) {
        array.push(i);
    }
    return giveAccessTo(user);
}
console.log(letUserLogIn('Eva'));

function authenticate(verify) {
    let array = [];
    for(let i=0; i < verify; i++) {
        array.push(i);
    }
    return true;
}

function letPerson(person, fn) {
    /**
     * Tell it what to do by data;
     */
    if(person.level === 'admin') {
        fn(500000);
    } else if(person.level === 'user') {
        fn(100000);
    }
    return `${person.name} Logged in`;
}

letPerson({level: 'admin',name: 'eva'}, authenticate);

/** or... */
const f = (num1) => (num2) => { console.log(num1*num2) };
f(4)(6);