// Body Mass Index

let kilo = Number(prompt("Enter your weight(kg): "));

let boy = Number(prompt("Enter your height(m): "));

let result = kilo/(boy**2);

if (result < 18.5) {

    console.log(result + " ideal kilonun altında");

} else if (result <= 24.9) {

    console.log(result + " ideal kilonun altında");

} else if (result <= 29.9) {

    console.log(result + "ideal kiloda");

} else if (result <= 39.9) {

    console.log(result + "ideal kilonun üstünde (obez)");

} else if (result >= 40) {

    console.log(result + "ideal kilonun çok üstünde (morbid obez)");

}