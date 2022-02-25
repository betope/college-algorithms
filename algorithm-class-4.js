// Exercise 1
function verify(num) {
	num = Number(prompt("Type a number"));

  if(num >= 0 && num <= 9) {
  	console.log("Correct value");
  } else {
  	console.log("Incorrect value")
  }
}
verify()

// Exercise 2
function getInfo() {
	shift = prompt("Type N for night and M for morning");
  workedHours = Number(prompt("Type how many hours the employee worked today"));
}
function calcSalary(salary) {
	getInfo();
	if(shift == 'N' || 'n') {
  	salary = workedHours * 45;
    console.log(`The employee salary is: ${salary}`);
  } else {
  	salary = workedHours * 37.50
  	console.log(`The employee salary is: ${salary}`);
  }
}
calcSalary()

// Exercise 3
function getInternInfo() {
	schValue = Number(prompt("What is the value of your scholarship"));
  internTime = Number(prompt("How much time is the internship?"));
}
function verifyReq() {
	getInternInfo();
  if((schValue >= 750 && schValue <= 950) && (internTime >= 2)) {
  	console.log(`The intern has scholarship value of: ${schValue} and has ${internTime} yers of internship, so he(she) can join the trainnig.`);
  } else {
  	console.log(`The intern can not join the trainning.`);
  }
}
verifyReq();

// Exercise 4
function calcNewSalary(jobCode, currentWage, newWage) {
  jobCode = prompt("Type the code corresponding the job, 1, 2, 3, 4 or 5");
  currentWage = Number(prompt("Type the current wage from the job"));
  switch(jobCode) {
  	case '1':
    	newWage = (50 * currentWage / 100) + currentWage;
    	console.log(`CLERK, increase of: ${newWage - currentWage}, NEW WAGE: ${newWage}`);
    break;
    case '2':
    	newWage = (35 * currentWage / 100) + currentWage;
    	console.log(`SECRETARY, increase of: ${newWage - currentWage}, NEW WAGE: ${newWage}`);
    break;
    case '3':
    	newWage = (20 * currentWage / 100) + currentWage;
      console.log(`CASHIER, increase of: ${newWage - currentWage}, NEW WAGE: ${newWage}`);
    break;
    case '4':
    	newWage = (10 * currentWage / 100) + currentWage;
      console.log(`MANAGER, increase of: ${newWage - currentWage}, NEW WAGE: ${newWage}`);
    break;
    case '5':
			  console.log(`The Director won't receive a salary increase`)
    break;
    	default:
      	console.log("None code was insert in the program.")
  }
}
calcNewSalary();

// Exercise 5
let a, b, c;
a = Number(prompt("Type the value of A"));
b = Number(prompt("Type the value of B"));
c = Number(prompt("Type the value of C"));

function getDelta(delta) {
	delta = b * b - (4 * a * c);
	console.log(delta);
  if (delta < 0) {
    console.log("A raiz não pode ser calculdada, o valor de delta é negativo.")
  }
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