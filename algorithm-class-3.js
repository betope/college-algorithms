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
