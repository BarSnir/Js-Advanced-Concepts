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

let singLizard = dragon.sing.bind(lizard);
console.log(singLizard());

// or ..
Object.setPrototypeOf(lizard, dragon);
console.log(lizard.sing());