import uuid from "uuid";

/**
 * ACTION TYPES
 */

const SET_ALERT = "SET_ALERT";
const REMOVE_ALERT = "REMOVE_ALERT";

// Set Alert
export const setAlert = (msg, type, timeout = 5000) => {
  const id = uuid.v4();
  console.log("id: ", id);
  // dispatch({
  //   type: SET_ALERT,
  //   payload: { msg, type, id }
  // });
  // setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

/**
 * STATE
 */

const initialState = {
  alert: []
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
