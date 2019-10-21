function a() {
    console.log(this);
}

function b() {
    'use strict';
    console.log(this);
}

//a() --> global obj;
//b() --> undfiend;

const obj = {
    name: 'billy',
    sing() {
        return 'lalala '+ this.name;
    },
    singAgain() {
        return this.sing() + '!';
    }
}

console.log(obj.sing())// --> lalala billy;
console.log(obj.singAgain())// --> lalala billy;

/**
 * execute the same function to other objects;
 */

const name = 'global';

function importantPerson() {
    console.log(this.name);
}

const obj1 = {
    name : 'A',
    importantPerson: importantPerson
}

const obj2 = {
    name : 'B',
    importantPerson: importantPerson
}
importantPerson();
obj2.importantPerson();