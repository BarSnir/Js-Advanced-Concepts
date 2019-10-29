let human = {
    mortal: true,

}

let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates); 
console.log(socrates.mortal); 
console.log(human.isPrototypeOf(socrates)); 