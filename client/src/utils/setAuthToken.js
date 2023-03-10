// takes a token if a token exists then adds to the header
//（for sending requests so the server knows we are logged in)

import axios from "axios";

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    // delete keyword: deletes a property (key) from an object
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
