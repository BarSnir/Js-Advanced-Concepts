// Reference type
const object1 = {
    value: 10
}
const object2 = object1;
object3 = {
    value: 10
} 
console.log(object1 === object2," 😄");
console.log(object1 === object3," 😕");

// Context --> Depended on when the function invoked;
console.log("The global context-->", this);

function a() {
    console.log("The global context-->", this);
}
a();

const objectA = {
    a: function(where) {
        console.log(`This is ObjectA or Global? --> ${where} `, this);
    }
}
objectA.a("objectA");
let test = objectA.a;
test("global");
objectA["b"] = a;
objectA.b("Still objectA");

/** Unless context binding */
const objectC = {
    a:(where)=> {
        console.log(`${where} context binding` , this);
    }
}
objectC.a("Global");
test = objectC.a;
test("Global");

const objectD = {
    name: "Bar",
    b: (where) => {
        objectC.a(where);
    }
}
objectD.b("We are Still Global");