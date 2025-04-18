let result = 5 + 5 + '5';
console.log(result);           
console.log(typeof result);    

// 2. Перевірка символу @ та кількість символів
let email = "vladzukovskij84@gmail.com";
let containsAt = email.includes('@');
let length = email.length;

console.log("Містить @:", containsAt);         // Виведе: true
console.log("Кількість символів:", length);    // Виведе: кількість символів в email


let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = `${word1} ${word2} ${word3} Viktor`;

console.log(fullName);


let userName = "Олександро";
let payment = 300;

alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);