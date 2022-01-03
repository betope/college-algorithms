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
let objs = {
	wheelDCovered: null,
  ballDCovered: null,
  tireDCovered: null,
  wheelTime: null,
  ballTime: null,
  tireTime: null
};

 for(n = 0; n <= 0; n++) {
  objs.wheelDCovered = Number(prompt("Type wheel distance covered"))
  objs.ballDCovered =  Number(prompt("Type ball distance covered"))
  objs.tireDCovered =  Number(prompt("Type tire distance covered"))
  objs.wheelTime =  Number(prompt("Type the wheel needed time"))
  objs.ballTime =  Number(prompt("Type the ball needed time"))
  objs.tireTime =  Number(prompt("Type the tire needed time"))
}
// Exercise 6
let price;
price = Number(prompt("Type the product price"));
function calcDiscount(discount) {
	discount = price - 9 * price / 100;
	console.log(discount)
}
calcDiscount();

// Exercise 7
let nail = [];
nail.push(Number(prompt("Type how many nail shed was sold")));
nail.push(Number(prompt("Type how many square nails was sold")));

function nailValue() {
	let nailShed = 1.05;
  let squareNail = 0.51;
  total = nail[0] * nailShed + nail[1] * squareNail;
  commission = 10 * total / 100;
  console.log(`The total sales value was ${total}, and the commission percentage is: ${commission}`);
}
nailValue();

// Exercise 8
let coins = [];
coins.push(Number(prompt("Type how many coins of 0,25 cents.")));
coins.push(Number(prompt("Type how many coins of 0,10 cents.")));
coins.push(Number(prompt("Type how many coins of 0,05 cents.")));
function safeValue() {
	twentyFive = 0.25;
	ten = 0.10;
	five = 0.05;
  tFive = coins[0] * twentyFive;
  ten10 = coins[1] * ten;
  five5 = coins[2] * five;
  safe = tFive + ten10 + five5;
  console.log(`You have in the safe ${coins[0]} of 0,25, ${coins[1]} of 0,10 and ${coins[2]} od 0,05, with a total value of ${safe} in the safe.`);
}
safeValue();
// Exercise 9
function imcCalc(imc, weight, height) {
	weight = Number(prompt("Type your Weight"));
  height = Number(prompt("Type your Height"));
  imc = weight / (height * height);
  console.log(`Your IMC is: ${imc}`)
}
imcCalc()
// Exercise 10
function dolarConvert(totalReal, dolar) {
	totalReal = Number(prompt("Type how much do you want to convert to dollars"));
  dolar = Number(prompt("Type the dollar quote"));
  total = totalReal * dolar;
  console.log(`You'll have a total of: ${total} dollars.`)
}
dolarConvert();
