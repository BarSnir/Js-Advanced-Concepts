let dragon = {
    name: 'Tanya',
    fire: true,
    fight() {
        return 5;
    },
    sing() {
        if(this.fire)
            return `i am ${this.name}, breather of fire!`;
    }
}

let lizard = {
    name: 'Kiki',
    fight() {
        return 3;
    }
}

Object.setPrototypeOf(lizard, dragon);

for( let prop in lizard) {
    console.log(prop);
    if(lizard.hasOwnProperty(prop)) {
        console.log('this is my native property');
    }
}