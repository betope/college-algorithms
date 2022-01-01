// Exercise 1
let initialKm, finalKm, qtL, priceL;
initialKm = Number(prompt("Type the initial KM"));
finalKm = Number(prompt("Type the final KM"));
qtL = Number(prompt("How many liters were spent?"));
priceL = Number(prompt("How much does the liter cost?"));

function calculateSpent() {
	let distance = finalKm - initialKm;
	let medSpent = Math.round(distance / qtL);
	let spentVal = qtL * priceL;
	console.log(`The distance covered was: ${distance}, the average consumption was: ${medSpent}, and the spent value was: ${spentVal}`);
}
calculateSpent();

// Exercise 2
function calcArea(area, sideA, sideB) {
	sideA = Number(prompt("Type the value of A"));
	sideB = Number(prompt("Type the value of B"));
	area = sideA * sideB;
	console.log(`The rectangle area is: ${area}`)
}
calcArea();

// Exercise 3
let purchaseValue, numInstallments, finalPay;
purchaseValue = Number(prompt("Type the how much did you pay"));
numInstallments = Number(prompt("How many installments are you going to pay?"));

function calcPurchase() {
	finalPay = 5 * purchaseValue / 100 + purchaseValue;
	let instValue = finalPay / numInstallments;
	console.log(`You'll pay a total of: ${finalPay}, in ${numInstallments} installments each one with the value of: ${instValue}`)
}
calcPurchase();
// Exercise 4
let a, b, c;
a = Number(prompt("Type the value of A"));
b = Number(prompt("Type the value of B"));
c = Number(prompt("Type the value of C"));

function getDelta(delta) {
	delta = b * b - (4 * a * c);
	console.log(delta);
}
function getX1(x1) {
	x1 = (-b + Math.sqrt(delta)) / 2 * a;
	console.log(x1);
}
function getX2(x2) {
	x2 = (-b - Math.sqrt(delta)) / 2 * a;
	console.log(x2);
}
function calcAll() {
	getDelta();
	getX1();
	getX2();
}
calcAll();
// Exercise 5
// Exercise 6
// Exercise 7
// Exercise 8
// Exercise 9
// Exercise 10
