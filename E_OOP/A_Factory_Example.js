// Factory Programming - still not efficient programming;
// it's still cost us alot of memory;
function createElf(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return `attack with ${this.weapon}`;
        }
    }
}
const peter = createElf('Peter', 'stones');
console.log(peter.name, peter.attack());
const sam = createElf('Sam', 'Fire');
console.log(sam.name, sam.attack());

// procedural Programming
const elf = {
    name: 'Ora',
    weapon: 'bow',
    attack() {
        return `attack with ${this.weapon}`;
    }
}
console.log(elf.name,elf.attack());