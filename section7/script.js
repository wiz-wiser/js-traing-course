// // Arrays
// const numbers = [10, 100, 500, 1000];

// // push() adds to the array
// numbers.push(5000);

// // forEach() loops over all the items in the array
// numbers.forEach((nr) => {
// 	// console.log(nr + 10);
// });

// // map() like foreach but you get a new array back
// const newNumbers = numbers.map((nr) => {
// 	return nr * 2;
// });

// // some() - at least one el in the array has some condtion
// const result = numbers.some((number) => {
// 	return number > 100;
// });

// // find() - want to get the first element that satisfys a condition
// const results = numbers.find((number) => {
// 	return number > 300;
// });

// filter() - gives a new array filtered by the conditons
// const newNumbers = numbers.filter((number) => {
// 	return number > 400;
// });

// // Objects
// const user = {
// 	name: "Wiz",
// 	age: 25,
// };

// user.name = "Wizzy"; // Object is the same but the properties within it can change, same goes for arrays

// console.log(user);

// Functions (Advanced)

//callback functions - a function passed into another function as an argument
// function doSomething() {

// }

// const calculatePrice = () => {

// }

// methods - term for a particular type of method
// const arr = [5, 6, 7];
// arr.push();

// const user = {
// 	name: "Wiz",
// 	age: 25,
// 	hobbies: ["run", "ski"],
// 	calculateHobbies: function () {
// 		//can't use this keyword and arrow function so have to use the traditional version
// 		return 1 + this.hobbies.length; //this. refers to hobbies within this object
// 	},
// };
// console.log(user.calculateHobbies()); // calculateHobbies is the method on the function

// Destructuring
// const user = {
// 	name: "Wiz",
// 	age: 25,
// 	hobbies: ["run", "ski"],
// 	city: "london",
// };

// const { name, city } = user; //pulls out a varaible

// console.log(name, city);

// Spread operator
// const numbers1 = [5, 10, 15];
// const numbers2 = [20, 60, 100];

// const newNumbers = [...numbers1, ...numbers2];

//primitives vs reference values

// numbers, string and booleans are primitives
// console.log(5 === 5);
// console.log("hi" === "hi");
// console.log(true === true);

// //arrays and objects are different as you arent comparing the content of the array just the refrences
// console.log([1, 2] === [1, 2]);

//fetch api with async await
// const btnEl = document.querySelector(".btn");

// const clickHandler = async () => {
// 	//new async syntax - get req
// 	try {
// 		const response = await fetch("https://reqres.in/api/users");
// 		const data = await response.json();

// 		if (!response.ok) {
// 			console.log(data.description);
// 			return;
// 		}

// 		console.log(data.data[3].first_name);
// 	} catch (error) {
// 		console.log(error);
// 	}
// 	//new async syntax - post req
// 	// try {
// 	// 	const response = await fetch("https://reqres.in/api/users", {
// 	// 		method: "POST",
// 	// 		headers: {
// 	// 			"Content-Type": "application/json",
// 	// 		},
// 	// 		body: JSON.stringify(newUser),
// 	// 	});
// 	// 	const data = await response.json();

// 	// 	if (!response.ok) {
// 	// 		console.log(data.description);
// 	// 		return;
// 	// 	}

// 	// 	console.log(data);
// 	// } catch (error) {
// 	// 	console.log(error);
// 	// }

// 	//old syntax
// 	// fetch("https://reqres.in/api/users")
// 	// 	.then((response) => {
// 	// 		if (!response.ok) {
// 	// 			console.log("problem");
// 	// 			return;
// 	// 		}
// 	// 		return response.json();
// 	// 	})
// 	// 	.then((data) => {
// 	// 		console.log(data.data[3].first_name);
// 	// 	})
// 	// 	.catch((error) => {
// 	// 		console.log(error);
// 	// 	});
// };

// btnEl.addEventListener("click", clickHandler);

//for
// for (let i = 0; i < 2; i++) {
// 	console.log(i);
// }

//while - careful about getting an infinite loop
// let i = 0;
// while (i < 3) {
// 	console.log("hello");
// 	i++;
// }

// // switch
// const browser = "Chrome";

// switch (browser) {
// 	case "Firefox":
// 		console.log("User in on firefox");
// 		break;
// 	case "Chrome":
// 		console.log("User in on chrome");
// 		break;
// 	case "Edge":
// 		console.log("User in on edge");
// 		break;
// 	default:
// 		console.log("User in on other browser");
// }

// //window object
// console.log(window.document);
// console.log(window.location);
// console.log(window.fetch);
// console.log(window.console);
// window.document.querySelector is the same as document.querySelector

// //Math
// Math.floor(5.95); //round down to the nearest interger
// Math.ceil(5.95); //round up to the nearest interger
// const randomNumber = Math.random(); //get random number

// //Date
// const date = new Date(2050, 10, 5);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// date.setFullYear(2100);

// OOP in JavaScript
// const apartment1 = {
// 	sqMeters: 50,
// 	numberOfBedrooms: 3,
// 	isBig: function () {
// 		return this.sqMeters > 100 ? true : false;
// 	},
// 	calculatePrice: function () {
// 		return this.sqMeters * this.numberOfBedrooms;
// 	},
// };
// class Apartment {
// 	constructor(sqMeters, numberOfBedrooms) {
// 		this.sqMeters = sqMeters;
// 		this.numberOfBedrooms = numberOfBedrooms;
// 	}
// 	isBig() {
// 		return this.sqMeters > 100 ? true : false;
// 	}
// 	calculatePrice() {
// 		return this.sqMeters * this.numberOfBedrooms;
// 	}
// }

// const apartment1 = new Apartment(50, 3);
// const apartment2 = new Apartment(150, 5);

// console.log(apartment1, apartment2);

//Promises - we can create them and consume them

// // 1) create a Promise
// const p = new Promise((resolve, reject) => {
// 	const numberOfCustomers = 10;
// 	if (numberOfCustomers > 5) {
// 		resolve("Success"); //fulfilled with value
// 	} else {
// 		reject("Not enough promotion"); //failure with reason
// 	}
// });

// // 2) Consume a prome with .then() & .catch()
// p.then((value) => {
// 	console.log(value);
// }).catch((reason) => {
// 	console.log(reason);
// });

// // 3) Consime a promise with async/await & try/catch
// const checkResults = async () => {
// 	try {
// 		const value = await p;
// 		console.log(value);
// 	} catch (reason) {
// 		console.log(reason);
// 	}
// };
// checkResults();

// 4) Why & Where use promises in web development

// // 5) Fetch APi (most common eg of promises )
// fetch("https://reques.in/api/users")
// 	.then((res) => {
// 		if (!res.ok) {
// 			return Promise.reject("4xx or 5xx problem");
// 		}
// 		return res.json();
// 	})
// 	.then((data) => {
// 		console.log(data.data[2].email);
// 	})
// 	.catch((error) => console.log(error));

// 6) Promise.all / Promise.any
// Promise.all([fetchPhotoPromise, fetchCOmmentsPromise]) //returns one promise from an array fo promises
// 	.then((values) => {
// 		//render post
// 	});
// Promise.any([fetchPhotoServer1Promise, fetchPhotoServer2Promise]); //gets the quickest one
// 	.then((values) => {
// 		// do something
// 	});

//Event loop
function greeting() {
	console.log("hello");
	ok();
	console.log("hi");
}

function ok() {
	console.log("ok");
}

greeting();
