class Character {
    // private member;
    #age = '5';
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    /** private symbole - not realy working on js */
    _attack() {
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
const shrek = new Ogre('Shrek', 'Axe', 'Green');
shrek._attack();

// console.log(shrek.#age); --> SyntaxError: Private field '#age' must be declared in an enclosing class;