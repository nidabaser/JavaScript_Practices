/*
    Map ---> key - value
        A Map holds key-value pairs where the keys can be any datatype.
        A Map remembers the original insertion order of the keys.
*/

const map1 = new Map();

//Set
// map1.set("Grogu","Mandalorian");
// map1.set("Starship", true);
// map1.set([1,2,3], {firstName : "Din", lastName : "Djarin"})
// map1.set(true, "3");

map1.set(26, "Eskişehir");
map1.set(34, "İstanbul");
map1.set(6, "Ankara");
map1.set(43, "Kütahya");

//Get
console.log(map1.get(6));
console.log(map1.get(34));
console.log(map1.get(26));
console.log(map1.get(43));

//Size
let value;
value = map1.size;
console.log("Size:", value);

//Delete
value = map1.delete(43);
console.log("is deleted? ",value);

//Has
console.log(map1.has(36));
console.log(map1.has(26));

//For Of
for(let [key,value] of map1){
    console.log(key,value)
}

//Destructing
for(let value of map1){
    console.log(value)
}

//Only keys
for(let key of map1.keys()){
    console.log(key);
}

//Only values
for(let value of map1.values()){
    console.log(value);
}

//Convert Map to Array
const array = Array.from(map1);
console.log(array);

//Only keys
array.forEach((value)=>{
    console.log(value[0]);
})

//Only values
array.forEach((value)=>{
    console.log(value[1]);
})

//Convert Array to Map
const array2 = [
    [1, "Din Djarin"],
    [2, "Grogu"],
    [3, "Boba Fett"],
    [4, "Luke Skywalker"],
    [5, "Ashoka Tano"]
]

const myMap = new Map(array2);
console.log(array2);