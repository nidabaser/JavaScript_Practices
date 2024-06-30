// Date Kullanımı

let date = new Date();

// console.log(date);

// console.log(date.getFullYear());

// console.log(date.getDate());

// console.log(date.getDay());

// console.log(date.getHours());

// console.log(date.getMilliseconds());

// console.log(date.getMonth() + 1); // Jan = 0, Feb = 1 ...

// console.log(date.getSeconds());

// console.log(date.toLocaleDateString()); // Formatted date m/d/y

// console.log(date.toLocaleTimeString()); // Formatted time h:m:s AM/PM

// console.log(date.toLocaleString()); // Both date and time

console.log(date);

date.setDate(24);

date.setMonth(11);

date.setHours(12);

date.setMinutes(33);

date.setHours(date.getHours()+3); // Like UTC+3

console.log(typeof date);

console.log(date.toString());

console.log(typeof date.toString());