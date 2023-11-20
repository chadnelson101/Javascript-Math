// this function calculates the square root of a number by using Math.sqrt
function calculateSquareRoot(number) {
    return Math.sqrt(number);
}

let numberToCalculate = 16;
let result = calculateSquareRoot(numberToCalculate);
console.log( numberToCalculate +  result);

// this function is calculate the power of the numbers by using Math.pow
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

let baseNumber = 2;
let exponentNumber = 3;
let pow = calculatePower(baseNumber, exponentNumber);
console.log(`${baseNumber} raised to the power of ${exponentNumber} is: ${pow}`);


// this functions allows use to round dwon a number ny using Math.floor
function roundDown(number){
    return Math.floor(number);
}

let inputNumber = 5.8;
let roundedValue = roundDown(inputNumber);
console.log(`Rounded down value of ${inputNumber} is: ${roundedValue}`);

// this function allows us to round up a number by using Mth.ceil
function roundUp(number){
    return Math.ceil(number);
}

let decimalValue = 3.2;
let decimal = roundUp(decimalValue);
console.log(`${decimalValue} Rounded up value is: ${decimal}`);

// this function allows us to find the largest number ny using Math.max
function findLargestNumber(num1, num2) {
    return Math.max(num1, num2);
}

let num1 = 8;
let num2 = 5;
let larg =findLargestNumber(num1, num2);
console.log(`The largest number between ${num1} and ${num2} is: ${larg}`);

// this function allows us to find the largest number ny using Math.max
function findLowestNumber(num1, num2) {
    return Math.min(num1, num2, num3, num4);
}

let num3 = 8;
let num4 = 5;
let num5 = 10;
let num6 = 1;
let low =findLowestNumber(num1, num2);
console.log(`The largest number between ${num1}, ${num2}, ${num3} and ${num4} is: ${low}`);

// this function allows us to gernerate a random number and round in done by using Math.random and Math.floor
function randomWholeNumber(maximum) {
    return Math.floor(Math.random() *(maximum + 1));
}

let maxNumber = 100;
let max = randomWholeNumber(maxNumber);
console.log(`Random whole number between 0 and ${max} is:
${result}`);

// this function allows us to calculate the area of a circle bu usign Math.PI
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
}

let circleRadius = 5;
let area = calculateCircleArea(circleRadius);
console.log(`The area of a cirlce with the radius ${circleRadius} is: ${area}`);

// this fuctions allows us to round a decimal number by using a Math.floor
function roundDecimal(decimalValue) {
    return Math.floor(decimalValue);
}

let decimalNumber = 7.9;
let rounded = roundDecimal(decimalNumber);
console.log(`Rounded down value of ${decimalNumber} is: ${rounded}`);