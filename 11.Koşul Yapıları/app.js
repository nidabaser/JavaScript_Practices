// Conditions

// let point = 55;

// if(point>50){
//     console.log("Passed, your point: ", point);
// } else {
//     console.log("Not Passed, your point: ", point);
// }

// let age = Number(prompt("Your age: "));
// console.log(typeof age);

// let money = Number(prompt("Budget: "));
// console.log(typeof money);

// if(age>=18 && money>=3000 ){
//     alert("You can enter driving test");
// } else {
//     alert("You can not enter driving test");
// }


// GPA Calculation
// exam1 (%30), exam2 (%30), finalExam (%40)
// let exam1 = Number(prompt("Enter your first point: "));
// let exam2 = Number(prompt("Enter your second point: "));
// let finalExam = Number(prompt("Enter your final exam point: "));
// let average = ((exam1 * 0.3) + (exam2 * 0.3) + (finalExam * 0.4));

// if (average >= 60) {
//     alert("Congrats, You have passed :) Your GPA: " + average);
//     console.log("Dersten geçtiniz, tebrikler!");
// } else {
//     alert("Oh no, You have not passed :( Your GPA: " + average);
//     console.log("Dersten kaldiniz, geçmiş olsun :(");
// }

// Yol Ayrımı Uygulaması

let chosenPath = prompt("Please choose the way you want to go: [1] or [2] or [3] ");

if (chosenPath == 1) {

    alert("You have chosen " + chosenPath + ". path");

} else if (chosenPath == 2){

    alert("You have chosen " + chosenPath + ". path");
    
} else if (chosenPath == 3) {

    alert("You have chosen " + chosenPath + ". path");

} else {

    alert("Please choose valid path");
    
}