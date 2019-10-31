// Constructor Function
function Elf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
Elf.prototype.attack = function() {
    return `${this.name} is attacking with ${this.weapon}`;
}

Elf.prototype.build = function() {
    const self = this;
    function building() {
        console.log(`${self.name} is building tower.`)
    }
    building();
    //return building.bind(this);
};

const peter = new Elf('Peter', 'stones');
const sara = new Elf('Sara', 'Fire');

console.log(sara.attack());
console.log(peter.attack());
peter.build();