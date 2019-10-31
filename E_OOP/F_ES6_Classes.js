class Elf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} is attacking with ${this.weapon}!`);
    }
}

const peter = new Elf('Peter', 'Sword');
const sara = new Elf('Sara', 'Sword');

peter.attack();
sara.attack();