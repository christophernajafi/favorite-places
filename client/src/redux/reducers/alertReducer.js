import uuid from "uuid";

/**
 * ACTION TYPES
 */

const SET_ALERT = "SET_ALERT";
const REMOVE_ALERT = "REMOVE_ALERT";

/**
 * ACTION CREATORS
 */

// const setAlert = (message, type) => ({
//   type: SET_ALERT,
//   message,
//   type
// });

// const removeAlert = id => ({
//   type: REMOVE_ALERT,
//   id
// });

// Set and Remove Alert
export const setAlert = (message, type, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  // dispatch(setAlert(message, type));
  dispatch({
    type: SET_ALERT,
    payload: { message, type, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

/**
 * STATE
 */

const initialState = {
  alerts: []
};

/**
 * REDUCER
 */

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;
