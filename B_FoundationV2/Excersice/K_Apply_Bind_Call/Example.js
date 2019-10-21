function a() {
    console.log('Hi');
}
// a.call() --> Hi;
// a.apply() --> Hi;

const wizard = {
    name: 'Marline',
    health: 100,
    heal(num1, num2) {
        this.health = num1 + num2;
        console.log(`${this.name} was healed by ${this.health}`);
    }
}
const archer = {
    name: 'Robin Hood',
    helath: 30
}
wizard.heal.call(archer, 50, 80);
wizard.heal.apply(wizard,[50, 0]);
const healArcher = wizard.heal.bind(archer, 100, 100);
healArcher();

// function curring
function multiply(a, b) {
    return a*b;
}

let multiplyBy2 = multiply.bind(this, 2);
console.log(multiplyBy2(4));