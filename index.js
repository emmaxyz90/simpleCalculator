const prompt = require('prompt-sync')();

console.log('What operation would you like to perform?')
console.log('Option A: Addition')
console.log('Option B: Subtraction')
console.log('Option C: Multiplication')
console.log('Option D: Division')
let option = prompt("Enter option: ");
userOption = option.toUpperCase();

//Addition
if (userOption == 'A') {
    console.log('You have selected the Addition Operation')
    var arg1 = prompt("Enter first number: ");
    var arg2 = prompt("Enter second number: ");
    var result = parseFloat(arg1) + parseFloat(arg2);
    console.log(`The addtion of ${arg1} and ${arg2} equals ${result}`)
}
//Subtraction
else if (userOption == 'B') {
    console.log('You have selected the Subtraction Operation')
    var arg1 = prompt("Enter first number: ");
    var arg2 = prompt("Enter second number: ");
    var result = parseFloat(arg1) - parseFloat(arg2);
    console.log(`The subration of ${arg2} from ${arg1} equals ${result}`)
}
//Multiplication
else if (userOption == 'C') {
    console.log('You have selected the Multiplication Operation')
    var arg1 = prompt("Enter first number: ");
    var arg2 = prompt("Enter second number: ");
    var result = parseFloat(arg1) * parseFloat(arg2);
    console.log(`The mutipliaction of ${arg1} and ${arg2} equals ${result}`)
}
//Division
else if (userOption == 'D') {
    console.log('You have selected the Division Operation')
    var arg1 = prompt("Enter first number: ");
    var arg2 = prompt("Enter second number: ");
    var result = parseFloat(arg1) / parseFloat(arg2);
    console.log(`The division of ${arg1} by ${arg2} equals ${result}`)
}
else {
    console.log('Incorrect Entry. Pls retry.')
}
