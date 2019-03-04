import axios from "axios";

//if logged in can call func
const setAuthToken = token => {
  if (token) {
    //apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    //delete the auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
