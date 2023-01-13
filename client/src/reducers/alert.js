import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = [];

//this is similar to JS's array.reduce function
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      // return an array of previous state values appended with payload to it
      // notice it does not change the state, instead it returns a new one
      // the payload is defined in actions/alert.js, just an object {}
      // the state is a list of alert objects
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
