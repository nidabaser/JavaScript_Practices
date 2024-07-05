// Selectors (Seçiciler) - Style Özellikleri
// classname, id, tag name
// getElementById : id'ye göre elementi yakalar
// getElementsByClassName : Sınıfın adına göre elementi yakalar.
// get ElementByTagName : Etiket ismine göre elementi yakalar.

// const button = document.getElementById("todoAddButton");

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));

// console.log(button.className);
// console.log(button.getAttribute("class"));

// console.log(button.classList);
// console.log(button.classList[3]);

// const classListesi = button.classList;
// classListesi.forEach(function(className){
//     console.log(className);
// })

// console.log(classListesi);

// let buttonText = button.textContent;
// let buttonText2 = button.innerHTML;

// console.log(buttonText);
// console.log(buttonText2);

// button.textContent = "<b>To do Ekle</b>"; // only text
// button.innerHTML = "<b>To do Ekle</b>"; // makes bold

// const todoList = document.getElementsByClassName("list-group-item");
// console.log(todoList);

/*
const todoListArr = Array.from(document.getElementsByClassName("list-group-item"));
* todoListArr.forEach(function(todo){
    console.log(todo.textContent);
})
*/

// const forms = document.getElementsByTagName("form");
// console.log(forms);
// console.log(forms[1]);
// console.log(forms[1].id);
// console.log(forms[1].name);

// const todoList = document.getElementsByTagName("li");
// console.log(todoList);

//* getElementById - getElementByClassName - getElementByTagName
//* Üçünün işlevini birden yapan metot : querySelector - querySelectorAll

const clearButton = document.querySelector("#todoClearButton"); // id selection with #
console.log(clearButton);

const todoList = document.querySelector(".list-group"); // class selection with .
console.log(todoList);

const todoLists = document.querySelectorAll(".list-group-item");
console.log(todoLists);

const todoListIndex = document.querySelectorAll(".list-group-item")[2];
console.log(todoListIndex);

const todoLiChilds = document.querySelectorAll("li:first-child"); // or last-child
console.log(todoLiChilds);

const todoListChilds = document.querySelectorAll("li:nth-child(odd)"); // or even or numbers 1,2,3...
console.log(todoListChilds);

const todoListEvens = Array.from(document.querySelectorAll("li:nth-child(even)"));
todoListEvens.forEach(function(todo){
    todo.style.backgroundColor = "lightgrey"; // Change background color
})
console.log(todoListEvens);