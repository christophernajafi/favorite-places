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
const prodMiddlewares = [thunkMiddleware];

// development-only middleware
const devMiddlewares = [];

// development
if (process.env.NODE_ENV !== "production") {
	middleware = composeWithDevTools(
		applyMiddleware(
			...prodMiddlewares,
			...devMiddlewares,
			createLogger({ collapsed: true })
		)
	);
	// production
} else {
	middleware = applyMiddleware(...prodMiddlewares);
}

const store = createStore(reducer, middleware);

export default store;
