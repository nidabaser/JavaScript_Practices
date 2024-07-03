// Value and Reference Types

let username = "Nida";
console.log(typeof username);

// Value (Primitive) Types: String, Number, Boolean, Undefined, Null
// Reference (Non-Primitive) Types: Object, Array, Function

let obje = {
    user: "Sena",
    pass: "1234"
}
console.log(typeof obje);

let arr = [1,2,3,4];
console.log(typeof arr);

// Value Types are stored in the STACK
// Reference Types are stored on the HEAP

// Not: Value tipleride birinde yapılan değişiklik diğerini etkilemez.
// Ancak Referans tiplerde durum farklıdır.

let arr2 = arr;
let arr3 = [1,2,3,4];
console.log("arr:  " + arr);
console.log("arr2: " + arr2);
console.log("arr3: " + arr3);

if(arr==arr2){
    console.log("arr and arr2 are EQUAL");
    console.log("Çünkü RAM bellekteki adresleri de aynı!!!");
}else{
    console.log("arr and arr2 are NOT EQUAL");
}

if(arr2==arr3){
    console.log("arr2 and arr3 are EQUAL");
}else{
    console.log("arr2 and arr3 are NOT EQUAL");
    console.log("Çünkü RAM bellekteki adresleri farklı!!!");
}

// arr2 ile arr'nin referansları aynıdır.
// Peki arr2 üzerinde yapılan bir değişiklik arr'yi etkiler mi?

arr2.push(5);
console.log(arr);
console.log(arr2);

// Etkiledi ve arr üzerinde hiç bir değişiklik yapılmadı ama
// hala arr2'nin işaret ettiği yerin aynısını işaret ettiğinden
// bellekte o alanda değişiklik olunca otomatik olarak etkilenmiş oldu.
// Referans tiplerin value tiplerden farkı budur.