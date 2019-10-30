import axios from "axios";

/**
 * ACTION TYPES
 */

const SET_RESULTS = "SET_RESULTS";
const SET_LOCATION = "SET_LOCATION";
const SET_TERMS = "SET_TERMS";

/**
 * ACTION CREATORS
 */

const setSearchResults = () => {
	type: SET_RESULTS;
};

/**
 * ACTION THUNKS
 */

export const getSearchResults = () => async (dispatch) => {
	try {
		const { data } = await axios.get("/api/yelp");
	} catch (err) {
		console.log(err);
	}
};

/**
 * STATE
 */

const initialState = {
	latitude: "",
	longitude: "",
	searchTerms: "",
	searchLocation: "",
	searchResults: []
};

/**
 * REDUCER
 */

const searchResultsReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case SET_RESULTS:
			newState.searchResults = [...newState.searchResults];
			return newState;
		default:
			return state;
	}
};

export default searchResultsReducer;
