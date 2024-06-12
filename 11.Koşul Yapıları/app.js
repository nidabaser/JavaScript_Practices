// Conditions

// let point = 55;

// if(point>50){
//     console.log("Passed, your point: ", point);
// } else {
//     console.log("Not Passed, your point: ", point);
// }

let age = Number(prompt("Your age: "));
console.log(typeof age);

let money = Number(prompt("Budget: "));
console.log(typeof money);

if(age>=18 && money>=3000 ){
    alert("You can enter driving test");
} else {
    alert("You can not enter driving test");
}