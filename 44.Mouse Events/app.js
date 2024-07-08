// Mouse Events

/**
 * DOMContentLoaded
 * load
 * click
 * dblclick
 * dblclick
 * mouseover
 * mouseout
 * mouseenter
 * mouseleave
 */ 

// // DOMContentLoaded
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     alert("Sayfa Yüklendi");
// }

// // load
// window.addEventListener("load",run);
// function run(){
//     console.log("Sayfa Yüklendi");
// }

const cardTitle = document.querySelectorAll(".card-title")[1];

cardTitle.addEventListener("click", run);

function run(e){
    console.log(e.type);
}