// Keyboard Events

/**
 *  keypress : Sadece harf ve sayılarda tetiklenen event
 *  
 *  keydown : Tab, caps lock, ok tuşları, alt, ctrl gibi özel tuşlarda dahil hepsinde çalışır.
 *  
 *  keyup : Tuştan elini kaldırdığında çalışır. Özel tuşlar dahil.
 */

/*
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
*/

// How to prevent a user from refreshing the page by pressing F5
// document.addEventListener("keydown",runF5);
// function runF5(e){
//     console.log("Key: " + e.key);
//     console.log("Key ASCII: " + e.keyCode);
//     if(e.keyCode == 116){
//         alert("Refreshing page is prevented");
//     }
//     e.preventDefault();
// }

// How to take user input from selected element
const cardTitle = document.querySelectorAll(".card-title")[0];
const input = document.querySelector("#todoName");

console.log(input);
input.addEventListener("keyup",run);

function run(e){
    console.log(e.target.value);
    cardTitle.textContent = e.target.value;
}