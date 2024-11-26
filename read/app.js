const readline = require("readline-sync");

let name = readline.question("What is your name? : ");
console.log(`My name is ${name}`);

let age = readline.questionInt("What is your age? : ");
console.log(`My age is ${age}`);

let pwd = readline.questionNewPassword("Enter your password: ");
console.log(`My password is ${pwd}`);
