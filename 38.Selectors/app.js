// Selectors (Seçiciler) - Style Özellikleri
// classname, id, tag name
// getElementById : id'ye göre elementi yakalar

const button = document.getElementById("todoAddButton");

console.log(button);
console.log(button.id);
console.log(button.getAttribute("id"));

console.log(button.className);
console.log(button.getAttribute("class"));

console.log(button.classList);
console.log(button.classList[3]);

const classListesi = button.classList;
classListesi.forEach(function(className){
    console.log(className);
})

console.log(classListesi);

let buttonText = button.textContent;
let buttonText2 = button.innerHTML;

console.log(buttonText);
console.log(buttonText2);

button.textContent = "<b>To do Ekle</b>"; // only text
button.innerHTML = "<b>To do Ekle</b>"; // makes bold