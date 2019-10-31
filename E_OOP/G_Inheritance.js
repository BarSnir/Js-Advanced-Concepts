class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} attack with ${this.weapon}`); 
    }
}

class Elf extends Character {
    constructor(name, weapon, type)
    {
        super(name, weapon);
        this.type = type;
        console.table(this);
    }
}

class Ogre extends Character {
    constructor(name, weapon, color)
    {
        super(name, weapon);
        this.color = color;
        console.table(this);
    }
    makeFort() {
        console.log('strong fort was created.');
    }
}

const dolby = new Elf('Dolby', 'cloth', 'House');
dolby.attack();

const shrek = new Ogre('Shrek', 'Axe', 'Green');
shrek.makeFort();
shrek.attack();

// Ogre alon is just an object, his portotype,
// is an prototype of other instances.

console.log(Ogre.prototype.isPrototypeOf(shrek));
console.log(Ogre.prototype);
console.log(dolby instanceof Character);
console.log(dolby instanceof Elf);
console.log(Elf.isPrototypeOf(dolby));