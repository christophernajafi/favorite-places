import uuid from "uuid";

/**
 * ACTION TYPES
 */

const SET_ALERT = "SET_ALERT";
const REMOVE_ALERT = "REMOVE_ALERT";

/**
 * ACTION CREATORS
 */

// const setAlert = (message, alertType, id) => ({
//   type: SET_ALERT,
//   message,
//   alertType,
//   id
// });

// const removeAlert = id => ({
//   type: REMOVE_ALERT,
//   id
// });

/**
 * ACTION THUNKS
 */

// Set and Remove Alert
export const setAlert = (message, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  // dispatch(setAlert(message, alertType, id));
  console.log("ALERT");
  dispatch({
    type: SET_ALERT,
    payload: { message, alertType, id }
  });
  // dispatch(removeAlert(id));
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
  const newState = { ...state };
  switch (action.type) {
    case SET_ALERT:
      newState.alerts = [...action.payload];
      return newState;
    // return [...state, action.payload];
    case REMOVE_ALERT:
      newState.alerts = newState.alerts.filter(
        alert => alert.id !== action.payload
      );
      return newState;
    // return state.filter(alert => alert.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;
