// Dinamik olarak element oluşturmak

const link = document.createElement("a");

link.id = "goBlogWebSite";
link.className = "btn btn-dark btn-sm mt-3";
link.href = "https://linktr.ee/nidabaser";
link.target = "_blank";
link.innerHTML = "Personal Website";

console.log(link);

const cardBody = document.querySelectorAll(".card-body")[1];

console.log(cardBody);

cardBody.appendChild(link);

/*
<li class="list-group-item d-flex justify-content-between">Todo 3
<a href="#" class="delete-item">
    <i class="fa fa-remove"></i>
</a>
</li>
*/

const todo = document.createElement("li");
const todoLink = document.createElement("a");
const i  = document.createElement("i");

todo.className="list-group-item d-flex justify-content-between";
todo.innerHTML = "Todo 5";

todoLink.href="#";
todoLink.className="delete-item";

i.className="fa fa-remove";

todoLink.appendChild(i);

todo.appendChild(todoLink);

todoList.appendChild(todo);

console.log(link);
