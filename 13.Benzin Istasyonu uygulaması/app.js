// Gas Station Example
/*
    1.Dizel : 33.33
    2.Benzin : 22.22 
    3.LPG : 11.11

    Benzin istasyonuna gelen müşterilerden alınacak bilgiler
    1.Yakıt tipi (1, 2, 3)
    2.Yakıt miktarı (litre)
*/

let dizel = 33.33, benzin = 22.22, lpg = 11.11;
const newLine = "\r\n";

const select = "1. Dizel " + newLine
+ "2. Benzin " + newLine
+ "3. LPG " + newLine
+ "Yakıt türünü seçiniz";

let yakitTipi = prompt(select);
if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
let yakitLitresi = Number(prompt("Yakit litresi girin: "));
let bakiye = Number(prompt("Bakiyenizi girin: "));

if (yakitTipi == "1") {
    //Dizel
    let amount = dizel*yakitLitresi;
    amountBakiyeCalculator(amount, bakiye);

} else if (yakitTipi == "2") {
    // Benzin
    let amount = benzin*yakitLitresi;
    amountBakiyeCalculator(amount, bakiye);

} else if (yakitTipi == "3") {
    //LPG
    let amount = lpg*yakitLitresi;
    amountBakiyeCalculator(amount, bakiye);

} else {
    alert("Lütfen geçerli bir yakıt türü seçin.");

}
}

function amountBakiyeCalculator(amount, bakiye){
    if (amount < bakiye) {
        // Bakiyeniz yeterli ise
        bakiye -= amount;
        alert("Yakit alma işlemi başarılı" + newLine
            + "Kalan bakiyeniz: " + (bakiye)
        );
    } else {
        // Bakiyeniz yeterli değilse
        alert("Bakiyeniz yeterli değildir." + newLine
            + "Total amount is : " + amount + newLine
            + "Bakiyeniz: " + bakiye + newLine
            + "Eksik kalan tutar: " + (amount - bakiye)
        );
    }

}