// Arrow Functions

const yazdir = () => {
    console.log("Selam")
}
yazdir();

const yazdirParam = (firstName) => {
    console.log("Selam", firstName)
}
yazdirParam("Alice");

const yazdirParam2 = (firstName, lastName) => {
    console.log("Selam", firstName, lastName)
}
yazdirParam2("Alice","Dove");

// Arrow function sadeleştirmek
const kareAl = (x)=>{
    return x*x
}
console.log("Hesaplanan değer: ", kareAl(3));

// Yukarıdaki arrow fonksiyonu şu şekilde sadeleştirilebilir:
const kupAl = x=>x*x*x
console.log("Sadeleştirilmiş Arrow Fonksiyonu ile hesaplanan değer: ", kupAl(3));

// Not: Yani sadece parametre, ok ve return kısmı da yeterli aslında bir değişkene eşitleyip kullanıyoruz ona bile gerek yok