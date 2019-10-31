// Constructor Function
function CreateElf(name, weapon) {
    this.name = name;
    this.weapon = weapon;
}
CreateElf.prototype.attack = function() {
    return `${this.name} is attacking with ${this.weapon}`;
}
/**
 * const peter = createElf('peter', 'stones');
 * console.log(peter.name);
 * 
 * this code will return undefiend;
 */

const peter = new CreateElf('Peter', 'stones');
const sara = new CreateElf('Sara', 'Fire');
/**
 * const Elf1 = new Function('name', 'weapon',`
 * this.name = name;
 * this.weapon = weapon`);
 */
console.log(sara.attack());
console.log(peter.attack());
