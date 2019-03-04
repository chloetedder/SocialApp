const validator = require("validator");
const isEmpty = require("./is-empty");
//validator must be passed a string

module.exports = function validateLoginInput(data) {
  let errors = {};

  //change to string to use with validator
  //is this not redundant?? couldn't you just do this instead of doing validator.isEmpty??
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
