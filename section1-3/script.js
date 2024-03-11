// // variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects)
// const description = "We need a new floor."; //string
// const squareMeters = 100; //number
// const specialCoating = true; //boolean
// const floorOptions = ["carpet", "hardwood", "tiles"]; //array
// const renovationJob = {
// 	ownerName: "John",
// 	maximumPrice: 5000,
// 	category: "bathroom",
// 	newShower: true,
// 	colourOptions: ["seagreen", "oceanblue", "cyan"],
// }; //object with multiple properties

// console.log(renovationJob.category);

// //traditional functions vs arrow functions
// function caclulatePrice(sqMeters) {
// 	const price = 1000 + sqMeters;
// 	return price;
// }
// const result = caclulatePrice(5000);
// console.log(result);

// //anon function as it has no name after function but its assigned to caclulate price so the borswe rcan still derive a name from this
// var caclulatePrice = function (sqMeters) {
// 	const price = 1000 + sqMeters;
// 	return price;
// };

//arrow functions
// const caclulatePrice = (sqMeters) => {
// 	const price = 1000 + sqMeters;
// 	return price;
// };
// const caclulatePrice = (sqMeters) => 1000 + sqMeters;

// console.log(caclulatePrice(5000));

const headingEl = document.querySelector(".heading"); //to store element in variable you need the const

// headingEl.textContent = "Hello"; //targets string content
// headingEl.innerHTML = "Hello <span>Wiz</span>"; //targets string content
// headingEl.insertAdjacentElement("beforebegin", "Hello <span>Wiz</span>"); //targets string content

// headingEl.style.fontSize = "55px"; //target the css with style
// headingEl.classList.add("heading-big"); //change the css class is better practice than changing the actual css

const clickHandler = () => {
	headingEl.style.color = "red";
	console.log("change color ");
};

headingEl.addEventListener("click", clickHandler);
