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
