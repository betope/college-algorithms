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
