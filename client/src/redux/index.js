import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import searchResultsReducer from "./searchResultsReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  search: searchResultsReducer,
  auth: authReducer
});

// all middleware
let middleware;

// production middleware
const productionMiddleware = [thunkMiddleware];

// development-only middleware
const developmentMiddleware = [];

if (process.env.NODE_ENV !== "production") {
  // development
  middleware = composeWithDevTools(
    applyMiddleware(
      ...productionMiddleware,
      ...developmentMiddleware,
      createLogger({ collapsed: true })
    )
  );
} else {
  // production
  middleware = applyMiddleware(...productionMiddleware);
}

const store = createStore(reducer, middleware);

export default store;
