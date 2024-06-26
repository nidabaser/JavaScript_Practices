// Array Methods
/*
push        : Dizinin sonuna eleman ekler, dizinin uzunluğunu döner.
unshift     : Dizinin başına eleman ekler, eleman sayısını geriye döner.

pop         : Dizinin sonundan eleman siler, eleman sayısını döner.
shift       : Dizinin başından eleman siler, eleman sayısını döner.

splice(index, index)  : Belli bir indekse eleman eklemek ve silmek için kullanılır.

toString    : Dizileri string'e çevirebiliriz
join        : Diziyi string'e çevirir, araya eleman ekleyebilir.

concat      : Dizileri birleştirmek
slice       : Diziyi istenen yerden bölüp yeni dizi oluşturmak
length      : Dizinin uzunluğu
reverse     : Dizinin elemanlarını ters çevirmek
split       : Belli bir ifadeye göre bölüp diziye çevirmek
indexOf     : Elemanın indeks numarası
includes    : Dizi, verdiğimiz elemanı içeriyor mu?

*/

// Examples
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log("Array Length : " + fruits.length);

// // Push
// let afterPushLength = fruits.push("Lemon");
// console.log(fruits);
// console.log("After push array length : " + afterPushLength);

// // Unshift
// let afterUnshiftLength = fruits.unshift("Cherry");
// console.log(fruits);
// console.log("After unshift array length : " + afterUnshiftLength);

// // Pop
// let removedElement = fruits.pop();
// console.log(fruits);
// console.log(removedElement + " is the last element of array, its removed after pop");

// // Shift
// let removedElement2 = fruits.shift();
// console.log(fruits);
// console.log(removedElement2 + " is the first element of array, its removed after shift");

// Splice
// fruits.splice(0,0,"Watermelon"); // 0.index'ten başla, 0 tane eleman sil, karpuz elemanını ekle
// console.log(fruits);

// fruits.splice(2,0,"Tomato"); // add a new element into index 2 without removing any element
// console.log(fruits);

// fruits.splice(1,2); // start from index 1 and remove 2 elements
// console.log(fruits);

// fruits.splice(2,2,"Grape"); // start from index 2, remove 2 elements and add new element
// console.log(fruits);

// ToString
// console.log(typeof fruits);
// let stringFruits = fruits.toString();

// console.log(typeof stringFruits);
// console.log(stringFruits);

// Join
// let joinFruits = fruits.join(" - ");
// console.log(joinFruits);

// Concat
// let fruits1 = ["elma", "armut", "nar", "portakal"];
// let fruits2 = ["çilek", "kiraz"];
// let concatArray = fruits1.concat(fruits2);
// console.log(concatArray);

// Slice
// let slicedArray = fruits.slice(2);
// console.log(slicedArray);

// Reverse
let reversedArray = fruits.reverse();
console.log(reversedArray);