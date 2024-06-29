let book1 = {name: "Atomic Habits", author: "James Clear", price: "200", shelf: "1.1.A"}
let book2 = {name: "Eat that frog", author: "Brian Tracy", price: "200", shelf: "1.2.A"}
let book3 = {name: "Philosophy of Walking", author: "James Clear", price: "200",  shelf: "1.3.A"}
let book4 = {name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: "200", shelf: "2.1.B"}
let book5 = {name: "Deepwork", author: "Cal Newport", price: "200",  shelf: "2.2.B"}
let book6 = {name: "İlyada", author: "Author", price: "200",  shelf: "2.3.B"}
let book7 = {name: "Oddsey", author: "Author", price: "200", shelf: "3.1.C"}
let book8 = {name: "Arsen Lüpen", author: "Maurice LeBlanc", price: "200", shelf: "3.2.C"}
let book9 = {name: "Başarı Öyküleri", author: "Author", price: "200",  shelf: "3.3.C"}
let book10 = {name: "İnsan Yağmurları", author: "Author", price: "200",  shelf: "4.1.D"}
let book11 = {name: "Dijital Kale", author: "Dan Brown", price: "200",  shelf: "4.2.D"}
let book12 = {name: "Çöle İnen Nur", author: "Necip Fazıl Kısakürek", price: "200",  shelf: "4.3.D"}
let book13 = {name: "Endüstri 4.0", author: "Author", price: "200", shelf: "5.1.E"}
let book14 = {name: "Fahrenheit 451", author: "Ray Bradbury", price: "200", shelf: "5.2.E"}
let book15 = {name: "1984", author: "George Orwell", price: "200", shelf: "5.3.E"}

let books = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15];

let shelf11 = { code: "1.1.A", show: false };
let shelf12 = { code: "1.2.A", show: false };
let shelf13 = { code: "1.3.A", show: false };

let shelf21 = { code: "2.1.B", show: false };
let shelf22 = { code: "2.2.B", show: false };
let shelf23 = { code: "2.3.B", show: false };

let shelf31 = { code: "3.1.C", show: false };
let shelf32 = { code: "3.2.C", show: false };
let shelf33 = { code: "3.3.C", show: false };

let shelf41 = { code: "4.1.D", show: false };
let shelf42 = { code: "4.2.D", show: false };
let shelf43 = { code: "4.3.D", show: false };

let shelf51 = { code: "5.1.E", show: false };
let shelf52 = { code: "5.2.E", show: false };
let shelf53 = { code: "5.3.E", show: false };

let shelves = [
    [shelf51, shelf52, shelf53],
    [shelf41, shelf42, shelf43],
    [shelf31, shelf32, shelf33],
    [shelf21, shelf22, shelf23],
    [shelf11, shelf12, shelf13],
];

function createShelf(){

    console.clear();

    for(let i=0; i<shelves.length; i++){

        let row = "";

        for(let j=0; j<shelves[i].length; j++){
    
            row += "|" + shelves[i][j].code + "|";
    
        }

        console.log(row);
    
    }

}

createShelf();
