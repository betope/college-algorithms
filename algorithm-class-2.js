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