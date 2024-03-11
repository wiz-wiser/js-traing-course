import {
	searchInputEl,
	searchFormEl,
	jobListSearchEl,
	numberEl,
	BASE_API_URL,
	getData,
	state,
	sortingBtnRecentEl,
	sortingBtnRelevantEl,
} from "../common.js";
import renderError from "./Error.js";
import renderJobList from "./JobList.js";
import renderSpinner from "./Spinner.js";
import renderPaginationButtons from "./Pagination.js";

// -- SEARCH COMPONENT --
const submitHandler = async (event) => {
	//prevent defualt behavior
	event.preventDefault();

	//get seach text
	const searchText = searchInputEl.value;

	//validation (regex example)
	const forbiddenPattern = /[0-9]/;
	const patternMatch = forbiddenPattern.test(searchText);
	if (patternMatch) {
		renderError("Your search may not contain numbers");
		return;
	}

	//blur input (removes keyboard focus from the current element)
	searchInputEl.blur();

	//remove previous job itmes
	jobListSearchEl.innerHTML = "";

	//reset sorting buttons
	sortingBtnRecentEl.classList.remove("sorting__button--active");
	sortingBtnRelevantEl.classList.add("sorting__button--active");

	//render spinner
	renderSpinner("search");

	try {
		//fetch search results
		const data = await getData(`${BASE_API_URL}/jobs?search=${searchText}`);

		//extract job items
		const { jobItems } = data;

		//update state
		state.searchJobItems = jobItems;
		state.currentPage = 1;

		//remove spinner
		renderSpinner("search");

		//render number of results
		numberEl.textContent = jobItems.length;

		//render pagination buttons
		renderPaginationButtons();

		//render job items in the search job list
		renderJobList();
	} catch (error) {
		//network problem or other errors (e.g. trying to parse something not json as json)
		renderSpinner("search");
		renderError(error.message);
	}
};

searchFormEl.addEventListener("submit", submitHandler);
