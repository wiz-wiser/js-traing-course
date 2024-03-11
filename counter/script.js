const counterEl = document.querySelector(".counter");
const counterTitleEl = document.querySelector(".counter__title");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");

const incrementCounter = () => {
	//get current value of counter
	const currentValue = counterValueEl.textContent;

	//convert value to number type
	const currentValueAsNumber = +currentValue; //adding the plus in front makes it a number type

	//increment by 1
	let newValue = currentValueAsNumber + 1;

	//check if new value is greater than 5
	if (newValue > 5) {
		newValue = 5;

		//give indication limit has been reached
		counterEl.classList.add("counter--limit");
		counterTitleEl.innerHTML = `Limit! Buy <b>Pro</b> for >5!`;
		increaseButtonEl.disabled = true;
		decreaseButtonEl.disabled = true;
	}

	//update counter with new value
	counterValueEl.textContent = newValue;

	//unfocus increase button
	increaseButtonEl.blur;
};

increaseButtonEl.addEventListener("click", incrementCounter);

//press any key to increment
document.addEventListener("keydown", incrementCounter);

decreaseButtonEl.addEventListener("click", () => {
	//get current value of counter
	const currentValue = counterValueEl.textContent;

	//convert value to number type
	const currentValueAsNumber = +currentValue;

	//decrement by 1
	let newValue = currentValueAsNumber - 1; //use let as you reassign it if its less than 0

	//check if new value is less than 0
	if (newValue < 0) {
		newValue = 0;
	}

	//update counter with new value
	counterValueEl.textContent = newValue;

	//unfocus decrease button
	decreaseButtonEl.blur;
});

resetButtonEl.addEventListener("click", () => {
	//set counter value to 0
	counterValueEl.textContent = 0;

	//reset limit
	counterEl.classList.remove("counter--limit");
	counterTitleEl.textContent = "Counter";
	increaseButtonEl.disabled = false;
	decreaseButtonEl.disabled = false;

	//unfocus reset button
	resetButtonEl.blur;
});
