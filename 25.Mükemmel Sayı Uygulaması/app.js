/**
 * 
 * Perfect Number Example
 * 
 * 1,2,3,6 = 2 * 6 = 12
 * 1,2,4,7,14,28 = 2 * 28 = 56
 * 
 */

isPerfectNumber(5);
isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(496);
isPerfectNumber(498);

function isPerfectNumber(number){

    let toplam = 0;

    for(let i = 2; i <= number/2; i++){

        if(number%i==0){

            toplam += i;

        }

    }

    toplam += 1 + number;

    if(toplam == number*2){

        console.log( number + " is a perfect number");

    } else {

        console.log(number + " is not a perfect number");

    }

}