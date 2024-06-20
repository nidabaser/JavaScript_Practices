// Armstrong Numbers Example

// 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

let number = prompt("Please enter positive number: ");

let sum = 0;

for(let i = 0; i < number.length; i++){
    
    let digit = number.charAt(i);

    sum += digit*digit*digit;

}

if(Number(number) == sum){

    alert(number + " is an Armstrong Number");

}else{

    alert(number + " is NOT an Armstrong Number");

}