/*

Set

A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.

*/

const set = new Set();

//add method
set.add(true)
set.add(3.14)
set.add("Mandalorian")
set.add(7)
set.add({username:"nickname", password:"123"});
set.add([1,2,3,4])

console.log(set.size); // Size is 6

set.add(7)
set.add(7)
set.add(7)

console.log(set.size); // Size is not changed

//delete method
set.delete(7)
console.log(set.size); // Size changed after delete

//has method
console.log(set.has("Mandalorian"));
console.log(set.has(7));

//for of loop
for(let value of set){
    console.log(value);
}

//forEach loop
const values = Array.from(set); // Create an array from existing set
values.forEach((value)=>{
    console.log(value);
})

