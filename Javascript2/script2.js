// JavaScript Data Types

// 1. String
let name = "John";

// 2. Number
let age = 25;

// 3. BigInt
let bigNumber = 12345678901234567890n;

// 4. Boolean
let isStudent = true;

// 5. Undefined
let address;

// 6. Null
let phone = null;

// 7. Symbol
let id = Symbol("id");

// 8. Object
let person = {
    name: "John",
    age: 25
};

// 9. Array (special type of Object)
let fruits = ["Apple", "Banana", "Mango"];

// 10. Function (also an object in JavaScript)
function greet() {
    return "Hello!";
}


// Display values and their data types
console.log("name:", name, "| Type:", typeof name);
console.log("age:", age, "| Type:", typeof age);
console.log("bigNumber:", bigNumber, "| Type:", typeof bigNumber);
console.log("isStudent:", isStudent, "| Type:", typeof isStudent);
console.log("address:", address, "| Type:", typeof address);
console.log("phone:", phone, "| Type:", typeof phone);
console.log("id:", id, "| Type:", typeof id);
console.log("person:", person, "| Type:", typeof person);
console.log("fruits:", fruits, "| Type:", typeof fruits);
console.log("greet:", greet, "| Type:", typeof greet);
