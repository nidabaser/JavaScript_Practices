/*
? Sınav Soruları
1.Türkçe            40 tane soru her biri 4 puan
2.Matematik         40 tane soru her biri 4 puan
3.Sosyal Bilimler   20 tane soru her biri 4 puan
4.Fen Bilimleri     20 tane soru her biri 4 puan

ÖSYM +100 puan veriyor
OKul ortalaması max 60 puan veriyor
*/

let correctTurkishQuestions, uncorrectTurkishQuestions = 0;
let correctMathQuestions, uncorrectMathQuestions = 0;
let correctSocialSciencesQuestions, uncorrectSocialSciencesQuestions = 0;
let correctScienceQuestions, uncorrectScienceQuestions = 0;
let point = 0;

let newLine = "\r\n";
let message = "TYT Puan Hesaplama" + newLine
    + "[1] Puan Hesapla" + newLine
    + "[2] Exit";

let select = prompt(message);

switch (select) {

    case "1":
        let gpa = Number(prompt("Okul genel not ortalaması: "));

        correctTurkishQuestions = Number(prompt("Türkçe doğru sayisi: "));
        uncorrectTurkishQuestions = Number(prompt("Türkçe yanliş sayisi: "));

        correctMathQuestions = Number(prompt("Matematik doğru sayisi: "));
        uncorrectMathQuestions = Number(prompt("Matematik yanliş sayisi: "));

        correctSocialSciencesQuestions = Number(prompt("Sosyal doğru sayisi: "));
        uncorrectSocialSciencesQuestions = Number(prompt("Sosyal yanliş sayisi: "));

        correctScienceQuestions = Number(prompt("Fen doğru sayisi: "));
        uncorrectScienceQuestions = Number(prompt("Fen yanliş sayisi: "));

        let corrects = correctTurkishQuestions + correctMathQuestions + correctSocialSciencesQuestions + correctScienceQuestions;
        let uncorrects = uncorrectTurkishQuestions + uncorrectMathQuestions + uncorrectSocialSciencesQuestions + uncorrectScienceQuestions;

        // 4 tane yanlış bir tane doğruyu götürecek
        let remainingCorrects = corrects - (uncorrects / 4);

        // Her soru 4 puan, kalan soruları çarpıp puanı bul
        point = (remainingCorrects * 4) + 100 + gpa;

        alert("TYT puanınız: " + point);
    break;

    case "2":
        alert("Exit...");
    break;

    default:
        alert("Please select valid option");
    break;

}