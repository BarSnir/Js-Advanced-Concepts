// flat 
const array = [1, 2, 3, 4, [5, [6]]];
console.log(array.flat(2));

const entries = ["bob", "uncle",,,,,,,"Andrei"];
console.log(entries.flat());

const Entries2 = entries.flatMap( obj=> obj+"😻" );
console.log(Entries2);


const userEmail = '          bar1991snir@gmail.com ';
const userEmail2 = 'bar1991snir@gmail.com          ';
console.log(userEmail.trimStart());
console.log(userEmail2.trimEnd());

const userProfile = [["commanderTom", 23],["DerekZlander", 40], ["hansel", 18]];
console.log(Object.fromEntries(userProfile));
const objProfile = userProfile;
console.log(Object.entries(objProfile));
