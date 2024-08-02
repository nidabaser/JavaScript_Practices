// Spread Operatörü

let numbers = [1,2,3,4,5,6,7,8,9]
function add(n1,n2,n3,n4,n5,n6,n7,n8,n9){
    console.log(n1+n2+n3+n4+n5+n6+n7+n8+n9);
}

// Eski yöntem
//*add(numbers[0], numbers[1], numbers[2], numbers[3], + ...)

// Yeni yöntem
add(...numbers) //* Kısa yol

// Another Example
const backend = ["Java", "C#", "PHP"]
const frontend = ["HTML", "Javascript", "CSS"]

//Eski Yöntem
//*const fullstack = [frontend[0], frontend[1], frontend[2], backend[0], backend[1], backend[2]]

//Yeni Yöntem
const fullstack = [...frontend, ...backend] //* Kısa yol

console.log("Backend: ", backend);
console.log("Frontend: ", frontend);
console.log("Fullstack: ", fullstack);

// Another Example
const oddNumbers = [1,3,5,7,9]
let [a,b, ...remainingNumbers] = oddNumbers
console.log(a, b, remainingNumbers);