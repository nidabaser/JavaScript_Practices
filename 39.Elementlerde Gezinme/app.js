// HTML Elementleri Üzerinde Gezinme

const todo = document.querySelector(".list-group-item");
//console.log(todo);

const todoList = document.querySelector(".list-group");
//console.log(todoList);

const card = document.getElementsByClassName("card")[0];
//console.log(card);

const row = document.querySelector(".row");

// Parent-child relations

let value = todoList;

value = todoList.children[0].textContent;

value = todoList.children[todoList.children.length-1].textContent; // Last child

value = todoList.children[3].textContent = "Text Changed";

value = Array.from(todoList.children);

value.forEach(function(todo){
    console.log(todo.textContent);
})

value = todo;

value = todo.parentElement; // ul

value = todo.parentElement.parentElement; // cardBody

value = todo.parentElement.parentElement.parentElement; // card

value = todo; // To do 1

value = todo.nextElementSibling; // To do 2

value = todo.nextElementSibling.nextElementSibling; // To do 3

value = value.previousElementSibling; // To do 2

value = value.previousElementSibling; // To do 1

console.log(value);

value = row.children[0].children[3].children[0].textContent = "Title Changed"; // to do list title

let todo3 = row.children[0].children[3].children[2].children[2];

todo3.textContent = "Todo 3 değişti";

todo3.style.backgroundColor = "Purple";

todo3.style.color = "lightPink";

console.log(value);