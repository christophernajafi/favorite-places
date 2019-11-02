import axios from "axios";

/**
 * ACTION TYPES
 */

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const SET_SEARCH_LOCATION = "SET_SEARCH_LOCATION";
const SET_SEARCH_TERMS = "SET_SEARCH_TERMS";
const SET_LAT_LONG = "SET_LAT_LONG";

/**
 * ACTION CREATORS
 */

// eslint-disable-next-line
const setSearchResults = (searchResults) => ({
	type: SET_SEARCH_RESULTS,
	searchResults
});

// eslint-disable-next-line
const setSearchLocation = (location) => ({
	type: SET_SEARCH_LOCATION,
	location
});

// eslint-disable-next-line
const setSearchTerms = (terms) => ({
	type: SET_SEARCH_TERMS
});

// eslint-disable-next-line
const setLatLong = () => ({
	type: SET_LAT_LONG
});

/**
 * ACTION THUNKS
 */

export const getSearchResults = (terms, location) => async (dispatch) => {
	try {
		const { data } = await axios.get("/api/yelp", {
			params: {
				terms,
				location
			}
		});
		console.log("getSearchResults ", data);
		dispatch(setSearchResults(data));
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
		case SET_SEARCH_RESULTS:
			newState.searchResults = [...action.searchResults];
			return newState;
		default:
			return state;
	}
};

export default searchResultsReducer;
