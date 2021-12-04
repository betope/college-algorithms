//Exercise 1 - Get the name and price of two medicines and show to the user
let med1, med2, sellPrice1, sellPrice2;
med1 = prompt("Type the name of the first medicine");
sellPrice1 = prompt("Type the price of the first medicine");
med2 = prompt("Type the name of the second medicine");
sellPrice2 = prompt("Type the price of the second medicine");
console.log(`The first medicine name is ${med1} and its price is ${sellPrice1}`);
console.log("The second medicine name is " + med2 + " and its price is " + sellPrice2);

// Exercise 2
let employee, empPosition, dependents;
employee = prompt("What's the name of the employee?");
empPosition = prompt("What's the employee position?");
dependents = prompt("How many dependents does the employee have?");
console.log(`Employee name: ${employee} \n Employee position: ${empPosition} \n Employee dependents: ${dependents}`);

// Exercise 3
let a, b, d, a1, a2, area;
a = prompt("Type the value of A");
b = prompt("Type the value of B");
d = prompt("Type the value of D");
a1 = a * b;
a2 = b * d;
area = a1 + a2
console.log(`The total area of the rectangles are: ${area}`)

// Exercise 4
let h, r, volume, base
r = prompt("What is the height of the cilinder?")
r = prompt("What is the raid of the radius of the cilinder?")
volume = h * 3.14 * (r * r)
base = 3.14 * (r * r)
console.log(`The cilinder base is ${base} and its volume is ${volume}`)

// Exercise 5
let a, b, c, delta, x1, x2;
a = prompt("Type the value of A");
b = prompt("Type the value of B");
c = prompt("Type the value of C");
delta = b * b - 4 * a * c
if(delta < 0) {
	console.log("The square root is negative: " + delta)
} else {
	x1 = (-b) + Math.sqrt(delta) / 2 * a;
	x2 = (-b) - Math.sqrt(delta) / 2 * a;
}
console.log("The roots are: " + x1 + " and, " + x2)

// Exercise 5
// Exercise 6
// Exercise 7
// Exercise 8

// Exercise 9
let a, b, res;
a = Number(prompt("Type the value of A"))
b = Number(prompt("Type the value of B"))
res = a % b
console.log(res)
// Exercise 10
// Exercise 11
// Exercise 12

// Exercise 13
let area, base, height;
base = prompt("Type the value of the base");
height = prompt("Type the value of the height");
area = base * height / 2
console.log(`The triangle area is: ${area}`)
