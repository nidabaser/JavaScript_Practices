// Diziler (Arrays)

let numbers = [0,1,2,3,4,5,6,7,8,9];

let mixedArray = [0,1,2,3,"Nida",4,"A"];

console.log(numbers[6]);

mixedArray[4] = "Hello";

console.log(mixedArray[4]);

console.log(numbers[numbers.length-1]);

numbers[numbers.length-1] = "Something";

console.log(numbers);

console.log(mixedArray);

let mixedArray2 = [0,1,"N","Hello",true,null,undefined];

let newArray = [];

let newArray2 = new Array(); // Bu yöntemle nesne türetmiş oluyoruz
// Nesne türetmeninin performans maliyeti var, o yüzden üstteki yöntem daha iyi

let personel1 = {
    name: "Nida",
    surname: "Başer",
    age:25,
}

let personel2 = {
    name: "Sena",
    surname: "Başer",
    age:23,
}

let personelArray = [personel1,personel2,1,true,numbers];
console.log(personelArray[4][5]);
console.log(personelArray[0].name);
console.log(typeof personelArray);