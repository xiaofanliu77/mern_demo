import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action; //destructuring

  switch (type) {
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
    case REGISTER_FAIL:
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
