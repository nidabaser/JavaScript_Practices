/**
    
    Prime Number Example
    
    Bir sayının 2'ye bölünüp bölünmediğini ve
    kendisinin yarısına kadar olan sayılara
    bölünüp bölünmediğine bakmak yeterli.
    Zaten sayının kendisinin yarısından fazla
    olan sayılara bölmenin anlamı yoktur. 

 */

let number = Number(prompt("Please enter number: "));

let result = true;

for(let i = 2 ; i <= Math.floor(number/2) ; i++){

    if(number % i == 0){

        // Not Prime Number
        result = false;

        break;
        
    }

}

if(result){

    alert(number + " is a prime number");

} else {

    alert(number + " is not a prime number");

}