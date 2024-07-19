//Tüm Elementleri Seçmek

const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

runEvents();

function runEvents(){
    form.addEventListener("submit",addTodo);
}

function addTodo(e){
    console.log("Submit event'i çalıştı");
    e.preventDefault();
}