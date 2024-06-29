//Math Class Methods

//Floor
//Returns the greatest integer less than or equal to its numeric argument
let a = 3.15;
console.log(Math.floor(a));

//Ceil
//Returns the smallest integer greater than or equal to its numeric argument.
let b = 3.01;
console.log(Math.ceil(b));

//Round
//Returns a supplied numeric expression rounded to the nearest integer.
let roundDown = 3.49;
console.log(Math.round(roundDown));
let roundUp = 3.50;
console.log(Math.round(roundUp));

//Max
//Returns the larger of a set of supplied numeric expressions.
console.log(Math.max(1,2,3,55));

//Min
//Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(10,0,-5));

//Abs
//Returns the absolute value of a number (the value without regard to whether it is positive or negative).
console.log(Math.abs(-12));

//Sqrt
//Returns the square root of a number.
console.log(Math.sqrt(64));

//Pow
//Returns the value of a base expression taken to a specified power.
console.log(Math.pow(3,2));

// Pi
//This is the ratio of the circumference of a circle to its diameter.
console.log(Math.PI);

//Random
//Returns a pseudorandom number between 0 and 1.
console.log(Math.random());
console.log(Math.random()*10); // Between 1-10
console.log(Math.random()*100); // Between 1-100

console.log(Math.floor(Math.random())); // Integer 0-1
console.log(Math.floor(Math.random()*10)); // Integer between 1-10
console.log(Math.floor(Math.random()*100)); // Integer between 1-100