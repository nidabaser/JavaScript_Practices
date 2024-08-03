//For in  - For of Loops

let names = ["Noctis","Lucis","Caelum","Ignis","Gladius","Prompto"];

// names.forEach(function(name){
//     console.log(name)
// })

// Tek satır hali:
// names.forEach(name=>console.log(name))


//For in Döngüsü
for(let name in names){
    console.log(name , names[name])
}


//For of Döngüsü
for(let isim of names){
    console.log(isim , names.indexOf(isim))
}