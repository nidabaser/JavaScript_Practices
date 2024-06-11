/*
    Dialog Boxes
    - Alert
    - Prompt
    - Confirm
*/

//console.log(window);

alert("Please save transaction");

let userName = prompt("Please enter your name: ");
console.log(userName);

let userAge = prompt("Please enter your age: ");
console.log(userAge);

console.log(typeof userName); // Note: User prompts
console.log(typeof userAge); // always return as a String

// Select lines and make comment : CTRL + K + C

let result = confirm("Are you sure?");
console.log(result);