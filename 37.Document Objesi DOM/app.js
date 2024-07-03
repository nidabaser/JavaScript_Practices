//Document Objesi | DOM

// console.log(window);

let value;

// console.log(document);

// value = document.location.href;
// console.log("href: " + value);
// value = document.location.hostname;
// console.log("hostname: " + value);
// value = document.location.port;
// console.log("port: " + value);
// value = document.location.pathname;
// console.log("pathname: " + value);

// value = document.all; // deprecated

value = document.characterSet;
console.log("charset: " + value);

value = document.title;
console.log("title: " + value);

value = document.links.item(4);
console.log("links: " + value);

value = document.links.item(4).id;
console.log("link item: " + value);

value = document.links.item(4).getAttribute("id");
console.log("link item attribute id: " + value);

value = document.links.item(4).getAttribute("class");
console.log("link item attribute class: " + value);

value = document.links.item(4).classList[3];
console.log("link item classList: " + value);

value = document.forms.item(1).children;
console.log("form item children: " + value);

//value = document.domain; // deprecated

value = document.contentType;
console.log("document content type: " + value);
