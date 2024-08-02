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