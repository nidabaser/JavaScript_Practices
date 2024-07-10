// Session Storage
console.log(window);
console.log(window.sessionStorage);
console.log(sessionStorage);

// Adding Value (Key, Value)
sessionStorage.setItem("123", "Nida");
sessionStorage.setItem("456", "Sena");
sessionStorage.setItem("789", "Adin");
sessionStorage.setItem("101", "Anes");

// Removing Value (by key)
sessionStorage.removeItem("101");

// Get Item
let value = sessionStorage.getItem("123");
if(value == null){ // return null
    console.log("Not Found");
}else {
    console.log("Value is " + value);
}