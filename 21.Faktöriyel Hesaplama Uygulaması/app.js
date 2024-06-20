// Factorial Example

// 4! = 1*2*3*4
// 5! = 1*2*3*4*5

let num = Number(prompt("Please enter number: "));

let factorial = 1;

for(let i = 1 ; i <= num ; i++){
    
    factorial *= i;

}

alert("Factorial: " + factorial);