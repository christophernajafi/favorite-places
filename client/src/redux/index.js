import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import searchResultsReducer from "./searchResultsReducer";

const reducer = combineReducers({
	search: searchResultsReducer
});

// all middleware
let middleware;

// production middleware
const productionMiddleware = [thunkMiddleware];

// development-only middleware
const developmentMiddleware = [];

// development
if (process.env.NODE_ENV !== "production") {
	middleware = composeWithDevTools(
		applyMiddleware(
			...productionMiddleware,
			...developmentMiddleware,
			createLogger({ collapsed: true })
		)
	);
	// production
} else {
	middleware = applyMiddleware(...productionMiddleware);
}

const store = createStore(reducer, middleware);

export default store;
