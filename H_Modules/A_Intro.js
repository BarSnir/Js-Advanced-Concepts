// The module pattern
// Global scope
    // module scope
        // function scope
            // Block scope 
// IIFE;
const mark = 'global variable';
var fightModule = (function(name, name2){
    console.log(mark);
    function fight(name, name2) {
        console.log(`${name} & ${name2} is fighting`);
    }
    function peace(name, name2) {
        console.log(`🚬  🚬  🚬  ${name} & ${name2} making peace.`);
    }
    return {
        fight:fight,
        peace:peace
    }
})(mark);

const lordOfTheRings = fightModule;
const harryPotter = fightModule;
lordOfTheRings.fight('rohan', 'mordor');
harryPotter.fight('harry', 'voldemort');
lordOfTheRings.peace('rohan', 'mordor');
// console.log(fight); --> is not defiend;