// Local Storage

localStorage.setItem("motion1","Push Up");
localStorage.setItem("motion2","Barfix");
localStorage.setItem("motion3","Squat");

let value = localStorage.getItem("motion1");
console.log(value);

localStorage.removeItem("motion2");

localStorage.clear();