// Local Storage

// localStorage.setItem("motion1","Push Up");
// localStorage.setItem("motion2","Barfix");
// localStorage.setItem("motion3","Squat");

// let value = localStorage.getItem("motion1");
// console.log(value);

// localStorage.removeItem("motion2");

// localStorage.clear();

let motions = ["Push up", "Barfix", "Squat", "Chin up"];

localStorage.setItem("motions", JSON.stringify(motions));

let value = JSON.parse(localStorage.getItem("motions"));

//console.log(value);

value.forEach(function(motion){
    console.log(motion);
})

//* Tarayıcıyı açıp kapattığımızda
//* Session Storage'dan temizlenen veriler
//* Local Storage'dan temizlenmezler.