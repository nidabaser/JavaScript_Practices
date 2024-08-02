// Destructing Kullanımı

let langs = ["Java", "C#", "C++", "Python"]
let lang1, lang2, lang3, lang4

// lang1 = langs[0]
// lang2 = langs[1]
// lang3 = langs[2]
// lang4 = langs[3]

// Yukarıdaki tek tek ayırma yöntemi yerine kısaca,

[lang1, lang2, lang3, lang4] = langs

// Bu şekilde destructing ile ayırmak daha kolaydır

console.log(lang1, lang2, lang3, lang4);

// Array yerine Object ile Destruction kullanımı

const person = {
    firstName : "Alice",
    lastName : "Dove",
    salary : 50000,
    age : 33
}

let {firstName, lastName, salary, age} = person

//Veya yukarıdakinden farklı değişken isimleriyle de kullanılabilir ama console çıktısında da değişmesi gerekir.
//*let {firstName:isim, lastName:soyisim, salary:maas, age:yas} = person

console.log("Name:\t", firstName, "\nSurname\t", lastName, "\nSalary:\t", salary, "\nAge:\t", age);