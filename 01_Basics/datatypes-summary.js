//  primitive

// 7 types : String, numbers, boolean, Null, undefined, Symbol,
// BigInt

const score = 100
const scoreValue = 100.1

const isLLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3456766555444345n        // now it become bigInt after writing n after the numbers


// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktimaan", "naagraj", "doga"]
let myObj ={
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), Heap (Non-Primitive)

let myName = "Satyamchoudhary"

let anotherName = myName
anotherName = "Shivam"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "satyam@google.com"

console.log(userOne.email);
console.log(userTwo.email);
