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
