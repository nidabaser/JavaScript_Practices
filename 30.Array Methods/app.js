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

console.log(fruits.length);
let newArrayLength = fruits.push("Lemon");
console.log(newArrayLength);