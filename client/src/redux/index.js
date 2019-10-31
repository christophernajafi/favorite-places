import { combineReducers, createStore } from "redux";
import searchResultsReducer from "./searchResultsReducer";

const reducer = combineReducers({
	search: searchResultsReducer
});

const store = createStore(reducer);

export default store;
