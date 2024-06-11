/* 
   --- SCOPE ---
-> Global Scope
-> Function Scope
-> Block Scope

*/

/*

var variableName = 10;
console.log(variableName);

var a = 5; // Global Scope

function method1(){
    var b = 7; // Function Scope
    console.log(b);
}

console.log(b); // ! app.js:18 Uncaught ReferenceError: b is not defined

method1(); // calling method here

*/

/*

VAR - LET - CONST

var/let/const variableName = variableValue;

var : function scope -- RAM bellekte çok yer kaplar !

let / const : block scope özelliğine sahiptir.

*/

/*
var number = 10;
let five = 5;
const pi = 3.14;

function sayHi(){

    var hi = "Selam"; // function scope

    if(true){

        var seven = 7; // looks like block scope but it is "var" so its function scope
        console.log(seven); // can access from here
        
        let blockScopeLet = 13; // It is "let" so its block scope
        console.log(blockScopeLet);

        const euler = 2.71 // It is "const" so its block scope too
        console.log(euler);
    }

    console.log(hi);

    console.log(seven); //* can access from here too

    //console.log(blockScopeLet); //* cannot access from here

    //console.log(euler); //* cannot access from here
}

sayHi();

*/

//* NOTE: "var" kullanınca aynı isimli iki değişken oluşturabilirsin
//* ancak "let" veya "const" ile bunu yapamazsın isimleri farklı olmak zorundadır.

var a = 1;
var a = 2; // Can change the value of an a

let b = 3;
//let b = 5; // But cannot change the value of b

const t = 2;
//const t = 3; // Cannot change the value of t


// ? LET ve CONST arasındaki fark ne?
// const(constant) : sabit, değişmez

const e = 2.71;
//e = 2.77; // ! TypeError: Assignment to constant variable.
//console.log(e);

let abc = 77;
abc = 88;
abc = 99;
console.log(abc); // Value can change, writes the last one

// Const
const user1 = {
    username : "nida",
    password : "1234"
}

//user1 = {age : 25}; // Cannot change because its "const"

//console.log(user1); // ! TypeError: Assignment to constant variable.

// Let
let user2 = {
    username : "nida",
    password : "1234"
}

user2 = {age : 25}; // Can change because its "let"

console.log(user2);

// Const

const user3 = {
    username : "nida",
    password : "1234"
}

user3.username = "sena"; // Object is still constant but attributes can change

console.log(user3);