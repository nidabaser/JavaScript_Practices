let product1 = {
    name: "Hp Zbook Power G10",
    category: "Tech",
    price: 52.999
}
let product2 = {
    name: "HP Zbook Fury 16 G10",
    category: "Tech",
    price: 111.999
}
let product3 = {
    name: "HP Zbook FireFly 16 G10",
    category: "Tech",
    price: 51.999
}
let product4 = {
    name: "Lenovo Ideapad",
    category: "Tech",
    price: 32.999
}
let product5 = {
    name: "Lenovo Thinkpad",
    category: "Tech",
    price: 99.999
}
let product6 = {
    name: "Lenovo V15",
    category: "Tech",
    price: 41.999
}

let products = [product1, product2, product3, product4, product5, product6];

let filteredProducts = [];

let searchingProductName = prompt("Please enter product name: ");

// Method calls
getFilteredProducts(products);

printFilteredProducts(filteredProducts);

// Methods
function getFilteredProducts(products){
    
    products.forEach(function (product) {
        
        if(product.name.toUpperCase().includes(searchingProductName.toUpperCase(), 0)) {
            
            filteredProducts.push(product);
        }
    }); 
}

function printFilteredProducts(products){

    products.forEach(function(product){

        console.log(" | " + product.name + " | " + product.price + " | " + product.category);
    
    });
}