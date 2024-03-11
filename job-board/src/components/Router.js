import {
	jobDetailsContentEl,
	BASE_API_URL,
	getData,
	state,
} from "../common.js";
import renderSpinner from "./Spinner.js";
import renderJobDetails from "./JobDetails.js";
import renderError from "./Error.js";

const loadHashChangeHandler = async () => {
	//get if from url
	const id = window.location.hash.substring(1); //cuts off index 0 which is the #

	if (id) {
		//remove previous job details content
		jobDetailsContentEl.innerHTML = "";

		//add spinner
		renderSpinner("job-details");

		try {
			//fetch job item data
			const data = await getData(`${BASE_API_URL}/jobs/${id}`);

			//extract job item
			const { jobItem } = data;

			//update state
			state.activeJobItem = jobItem;

			//remove spinner
			renderSpinner("job-details");

			//render job details
			renderJobDetails(jobItem);
		} catch {
			//network problem or other errors (e.g. trying to parse something not json as json)
			renderSpinner("job-details");
			renderError(error.message);
		}
	}
};

window.addEventListener("DOMContentLoaded", loadHashChangeHandler);
window.addEventListener("hashchange", loadHashChangeHandler);
