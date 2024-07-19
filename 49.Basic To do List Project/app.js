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
    const inputText = addInput.value.trim();
    if(inputText == null || inputText==""){
        alert("Boş olamaz!");
    } else {
        addTodoUI(inputText);
        addTodoToStorage(inputText);
    }
    e.preventDefault();
}

// Arayüze todo ekleme metodu
function addTodoUI(newTodo){
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = newTodo;

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-item";

    const i = document.createElement("i");
    i.className = "fa fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);

    addInput.value = "";
}

// Storage'a todo ekleme metodu
function addTodoToStorage(newTodo) {
    checkTodosFromStorage(); // Different method call for null check
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}