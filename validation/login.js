const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password) ? data.password2 : '';

  if (Validator.isEmpty(data.email)) {
    errors.email = 'email field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'password is Invalid';
  }
  if (Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be atleast 6 Characters';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
