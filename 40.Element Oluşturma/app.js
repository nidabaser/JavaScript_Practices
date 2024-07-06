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