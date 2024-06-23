// Binary To Decimal Converter Example

let binary = "1011";

convertBinaryToDecimal(binary);

function convertBinaryToDecimal(){

    let sum = 0;

    let exponent = 0;

    for(let i = binary.length-1; i >= 0; i--){

        sum += Number(binary.charAt(i)) * Math.pow(2, exponent);

        exponent++;

    }

    console.log("Result: " + sum);

}