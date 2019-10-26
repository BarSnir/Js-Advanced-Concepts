function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'fahter';
        return function c() {
            let son = 'son';
            return ` ${grandpa} > ${father} > ${son}`;
        }
    }
}

console.log(a());
console.log(a()());
console.log(a()()());

function boo(string) {
    return function(name) {
        return function(name2) {
            return `${name2}`;
        }
    }
}

console.log(boo('hi'));
console.log(boo('hi')('Tim'));
console.log(boo('hi')('Tim')('Duncan'));

/** Or */
const boo2 = (str)=>(name)=>(name2)=> {
    return `${str} ${name} ${name2}`
} 
const booA = boo2('Hey');
console.log('Arrow Chain: ',booA);
const booB = booA('Tim');
console.log('Arrow Chain: ',booB);
const booC = booB('Duncan');
console.log(booC);
