import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import searchResultsReducer from "./searchResultsReducer";

const reducer = combineReducers({
	search: searchResultsReducer
});

// const middleware

// const devMiddlewares=[]

// const prodMiddlewares=[]

// if (process.env.NODE_ENV !== 'production') {
// 	middleware = composeWithDevTools(
// 			applyMiddleware(
// 					thunk,
// 					cartMiddleware,
// 					session,
// 					logger(),
// 					queryMiddleware(getQueries, getEntities)
// 			)
// 	)
// } else {
// 	middleware = applyMiddleware(
// 			thunk,
// 			cartMiddleware,
// 			session,
// 			queryMiddleware(getQueries, getEntities)
// 	)
// }

const store = createStore(reducer);
// const store = createStore(reducer, middleware);

export default store;
