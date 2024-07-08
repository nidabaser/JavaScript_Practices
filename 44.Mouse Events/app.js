// Mouse Events

/**
 * DOMContentLoaded
 * load
 * 
 * click
 * dblclick
 * 
 * mouseover
 * mouseout
 * mouseenter
 * mouseleave
 */ 

// //* DOMContentLoaded
// document.addEventListener("DOMContentLoaded",run);
// function run(){
//     alert("Sayfa Yüklendi");
// }

// //* load
// window.addEventListener("load",run);
// function run(){
//     console.log("Sayfa Yüklendi");
// }

// //* click and dblclick
// const cardTitle = document.querySelectorAll(".card-title")[1];
// cardTitle.addEventListener("click", run);
// cardTitle.addEventListener("dblclick", run);
// function run(e){
//     console.log(e.type);
// }

// //* mouseover, out, enter, leave
const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("mouseover",run);

cardBody.addEventListener("mouseout",run);

cardBody.addEventListener("mouseenter",run);

cardBody.addEventListener("mouseleave",run);

function run(e){
    console.log(e.type);
}