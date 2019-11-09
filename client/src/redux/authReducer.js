import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

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

/**
 * ACTION CREATORS
 */

// Logout
const logout = () => {
	dispatch({ type: LOGOUT });
};

// Clear Errors
const clearErrors = () => {
	dispatch({ type: CLEAR_ERRORS });
};

/**
 * ACTION THUNKS
 */

// Load User
const loadUser = async () => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}
	try {
		const { data } = await axios.get("/api/auth");
		dispatch({ type: USER_LOADED, payload: data });
	} catch (err) {
		dispatch({ type: AUTH_ERROR });
	}
};

// Register User
const register = async (formData) => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	try {
		const { data } = await axios.post("/api/users", formData, config);
		dispatch({ type: REGISTER_SUCCESS, payload: data });
		loadUser();
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.msg
		});
	}
};

// Login User
const login = async (formData) => {
	const config = {
		headers: {
			"Content-Type": "application/json"
		}
	};
	try {
		const { data } = await axios.post("/api/auth", formData, config);
		dispatch({ type: LOGIN_SUCCESS, payload: data });
		loadUser();
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.msg
		});
	}
};

/**
 * STATE
 */

const initialState = {
	token: localStorage.getItem("token"),
	isAuthenticated: null,
	loading: true,
	user: null,
	error: null
};

/**
 * REDUCER
 */

const authReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				user: action.payload
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				loading: false
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				user: null,
				error: action.payload
			};
		case CLEAR_ERRORS:
			return {
				...state,
				error: null
			};
		default:
			return state;
	}
};

export default authReducer;
