const elfFunc = {
    attack() {
        return `${this.name} attack with ${this.weapon}`;
    }
}

function createElf(name, weapon) {
    // Object.create used for inheritance;
    let newElf = Object.create(elfFunc);
    console.log(newElf.__proto__);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones');
console.log(peter.attack());