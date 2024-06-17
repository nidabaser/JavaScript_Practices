// Loops -> For Loop examples

// 1 to 10
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// 1 to 10 even numbers
// console.log("Even Numbers");
// for(let i = 0; i <= 10; i+=2){
//     console.log(i);
// }

// 1 to 10 odd numbers
// console.log("Odd Numbers");
// for(let i = 1; i <= 10; i+=2){
//     console.log(i);
// }

// 1 to 10 evens hello, odds world
// for(let i = 1; i <= 10; i++){
//     if (i % 2 == 1) {
//         console.log("Hello");
//     } else {
//         console.log("World");
//     }
// }

// Decreasing 50 to 1 and calculate sum
let sum = 0;
for(let i = 50; i >= 1; i--){
    sum += i;
    console.log(i);
}
console.log("Sum: " + sum);