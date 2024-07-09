// Keyboard Events

/**
 *  keypress : Sadece harf ve sayılarda tetiklenen event
 *  keydown : Tab, caps lock, ok tuşları, alt, ctrl gibi özel tuşlarda dahil hepsinde çalışır.
 *  keyup : Tuştan elini kaldırdığında çalışır. Özel tuşlar dahil.
 */

document.addEventListener("keypress",run);

function run(e){
    console.log(e);
    console.log("Pressed Key: " + e.key);
    console.log("Pressed Key ASCII: " + e.keyCode);
    console.log("Pressed Key ASCII: " + e.which);
}

document.addEventListener("keydown",run);

function run(e){
    console.log(e);
    console.log("Pressed Key: " + e.key);
    console.log("Pressed Key ASCII: " + e.keyCode);
    console.log("Pressed Key ASCII: " + e.which);
}

document.addEventListener("keyup",run);

function run(e){
    console.log(e);
    console.log("Key: " + e.key);
    console.log("Key ASCII: " + e.keyCode);
    console.log("Key ASCII: " + e.which);
}