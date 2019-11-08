import axios from "axios";

/**
 * ACTION TYPES
 */

const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_FAIL = "REGISTER_FAIL";
const USER_LOADED = "USER_LOADED";
const AUTH_ERROR = "AUTH_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
const LOGOUT = "LOGOUT";
const CLEAR_ERRORS = "CLEAR_ERRORS";

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
const SET_SEARCH_LOCATION = "SET_SEARCH_LOCATION";
const SET_SEARCH_TERMS = "SET_SEARCH_TERMS";
const SET_LAT_LONG = "SET_LAT_LONG";

/**
 * ACTION CREATORS
 */

// Load User

// Register User

// Login User

// Logout

// Clear Errors

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
		console.log("getSearchResults ", data.businesses);
		dispatch(setSearchResults(data.businesses));
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
	searchLocation: "",
	searchResults: [],
	searchTerms: ""
};

/**
 * REDUCER
 */

const authReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case SET_SEARCH_RESULTS:
			newState.searchResults = [...action.searchResults];
			return newState;
		default:
			return state;
	}
};

export default authReducer;
