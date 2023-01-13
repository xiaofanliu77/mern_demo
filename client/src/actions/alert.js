import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

// action: a JS object with a type attribute
// redux-thunk is used
// dispatch is a function of the store. It is the only way to update state.
// it is like a trigger for reducers to get to work and update the state.
export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
