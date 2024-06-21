// ? Methods

// ? Parametresiz ve geriye değer döndürmeyen

// function printName(){
//     console.log("Your name");
// }
// printName();

// function toplama(){
//     console.log(5+7);
// }
// toplama();

// ? Parametreli ve geriye değer döndürmeyen

// function yazdir(name, surname){
//     console.log(name + " " + surname);
// }
// yazdir("Nida", "Başer");
// yazdir("John", "Doe");
// yazdir("Lorem", "Ipsum");

// function cube(num){
//     console.log(num*num*num);
// }
// cube(3);
// cube(5);
// cube(10);

// let age = Number(prompt("Enter your age: "));
// checkAge(age);

// function checkAge(age){
//     if(age>=18){
//         console.log("Your age is enough to take drivers license");
//     }else{
//         console.log("Your age is NOT enough to take drivers license");
//     }
// }

// ? Geriye değer döndüren metod, return anahtar kelimesiyle:

// function exponantial(number, exp) {
//     let result = 1;
//     for (let i = 0; i < exp; i++) {
//         result *= number;
//     }
//     return result;
// }

// let returningValue = exponantial(3, 3);

// console.log(returningValue);

/*
 * NOTE:
 * 
 * "return" anahtar kelimesi bir değer metodun dışına çıkarmak içindir.
 * Aynı zamanda metodu bitirir yani sonrasında yazılan satırlar okunmaz.
 * 
 * Comment selected lines with
 * CTRL + K + C
 * 
 * Undo comment selected lines with
 * CTRL + Ö
 *
 */

// ? İç içe metod çağırma örneği

let resultNested = kupAl(2);

function kareAl(num){
    let result = num * num;
    return result;
}

function kupAl(num){
    let result = num*num*num;
    let kareResult = kareAl(result);
    console.log(kareResult);
}
