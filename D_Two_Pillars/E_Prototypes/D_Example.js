function a(){}
console.log(a.name);
console.log(a.length);

function multiplyBy5(num) {
    return num * 5;
}
console.log(multiplyBy5.name);
console.log(multiplyBy5.length);
console.log(multiplyBy5.__proto__);
console.log(multiplyBy5.__proto__.__proto__);
console.log(multiplyBy5.__proto__.__proto__.__proto__);