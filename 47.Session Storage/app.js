// Session Storage
console.log(window);
console.log(window.sessionStorage);
console.log(sessionStorage);

// Adding Value (Key, Value)
sessionStorage.setItem("123", "Nida");
sessionStorage.setItem("456", "Sena");
sessionStorage.setItem("789", "Adin");
sessionStorage.setItem("101", "Anes");
sessionStorage.setItem(521, "User"); // type is always string in session storage

// Removing Value (by key)
sessionStorage.removeItem("101");

// Get Item
let value = sessionStorage.getItem("123");
if(value == null){ // return null
    console.log("Not Found");
}else {
    console.log("Value is " + value);
}

// Remove All
//sessionStorage.clear();

// Session storage type
let type = sessionStorage.getItem(521);
console.log(typeof type);

// Session storage - Array Printing
let names = ["Ali", "Ayşe", "Fatma", "Adem"];

// sessionStorage.setItem("names", names);
sessionStorage.setItem("names", JSON.stringify(names));

// let arr = sessionStorage.getItem("names");
let arr = JSON.parse(sessionStorage.getItem("names"));

//console.log(typeof value); // Array but type is string
console.log(arr);

// Using forEach with this array
// Eğer yukarıda JSON.parse yapmamış olsaydık,
// forEach yapamaz, hata alırdık
arr.forEach(function(name) {
    console.log(name);
});