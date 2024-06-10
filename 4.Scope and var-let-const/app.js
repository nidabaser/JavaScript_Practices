// Var - Let - Const

/* --- SCOPE ---
-> Global Scope
-> Function Scope
-> Block Scope
*/

var variableName = 10;
console.log(variableName);

var a = 5; // Global Scope

function method1(){
    var b = 7; // Function Scope
    console.log(b);
}

console.log(b); // ! app.js:18 Uncaught ReferenceError: b is not defined

method1();