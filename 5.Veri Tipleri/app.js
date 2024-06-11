/*
? Data Types in JS

1- String
2- Number
3- Boolean
4- Null
5- Undefined
6- Object
7- Function

*/

let myName = "Nida Başer";
console.log(typeof myName); // String

let myAge = 25;
console.log(typeof myAge); // Number

let price = 11.99;
console.log(typeof price); // Number

let a = "5";
let b = "2";
console.log(a+b); // String Concantenation

let stringYourAge = "Your age is: ";
console.log(stringYourAge + myAge); // what is the type?

console.log(5>3); // True
console.log(5>8); // False

let n = null; // Initialization
n = 22;
console.log(n);

let u;
console.log(typeof u); // Undefined

let human = { // Object
    name : "Sena",
    surname : "Başer",
    age : 24
}

console.log(typeof human); // Object

let numbers = [1,2,3,4,5];
console.log(typeof numbers); // Object

let func = function(){
    console.log("Selam!");
}
func();
console.log(typeof func); // Function