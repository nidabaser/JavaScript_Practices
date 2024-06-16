/*
    TYpe Casting (Tür Dönüşümleri)
    Primitive: strings, numbers, booleans, undefined, and null.
    Non-Primitive: object, function.

*/

let a = 5;
let b = "10";

console.log(a+b); // concatenates string
// > 510 not 15

let c = Number(b);
console.log(a+c); // Type casting
// > 15
// or let b = Number("5");

let x = 8;
let y = parseInt("12"); // or parseFloat("12.75");
console.log(x+y);
console.log(typeof y);

let m = (777).toString(); // Number to String
console.log(typeof m);
console.log(m);

let r = String(true);
console.log(typeof r); // Boolean to String
console.log(r);

let arr = [1,2,3,4,5]; // Object
console.log(typeof arr);
console.log(arr);
//! let arr2 = Number[1,2,3,4,5]; Error: NaN(Not a Number)
