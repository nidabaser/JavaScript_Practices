// Keyboard Events

/**
 *  keypress : Sadece harf ve sayılarda tetiklenen event
 *  
 *  keydown : Tab, caps lock, ok tuşları, alt, ctrl gibi özel tuşlarda dahil hepsinde çalışır.
 *  
 *  keyup : Tuştan elini kaldırdığında çalışır. Özel tuşlar dahil.
 */

document.addEventListener("keypress",run1);
function run1(e){
    console.log(e);
    console.log("Pressed Key: " + e.key);
    console.log("Pressed Key ASCII: " + e.keyCode);
    console.log("Pressed Key ASCII: " + e.which);
}

document.addEventListener("keydown",run2);
function run2(e){
    console.log(e);
    console.log("Pressed Key: " + e.key);
    console.log("Pressed Key ASCII: " + e.keyCode);
    console.log("Pressed Key ASCII: " + e.which);
}

document.addEventListener("keyup",run3);
function run3(e){
    console.log(e);
    console.log("Key: " + e.key);
    console.log("Key ASCII: " + e.keyCode);
    console.log("Key ASCII: " + e.which);
}