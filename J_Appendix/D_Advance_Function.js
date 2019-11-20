// Closures
const a = () => {
    const message = "Hello";
    return () => {
        console.log("Message from closure variable --> : ", message);
    }
}
a()();

// Currying
const curriedFunction = (a) => (b) => a * b;
console.log("currying pt1 --> : ",curriedFunction(5));
console.log("complete currying  --> : ",curriedFunction(5)(6));

// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

console.log("compose --> : ", compose(sum, sum)(5));