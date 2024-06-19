// Do While Loop Examples

let count = 1;

// 1 to 10
// do{
//     console.log(count);
//     count++;
// }while(count<=10);

// 1 to 20, odd numbers;
// let sum = 0;
// do{
//     if(count%2==1){
//         sum += count;
//     }
//     count++;
// } while (count<=20);
// console.log("Sum of the odd numbers 1 to 20 is " + sum);

//? Break and Continue
while(count<=10){
    count++;
    if(count>10){
        break; // Döngüyü kırdı ve çıktı
    }
    if(count==8){
        continue; // Sadece bu adımı yapma sonrasına devam et
    }
}