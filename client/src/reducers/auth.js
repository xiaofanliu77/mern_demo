import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action; //destructuring

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    // if register is successful, we want to log the user in right away
    case REGISTER_SUCCESS:
      // localStorage is a property of the Window object
      localStorage.setItem("token", payload.token);
      return {
        ...state, //spread operator, copy over state then change it.
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    // both do the same things: cleans out the local storage
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
