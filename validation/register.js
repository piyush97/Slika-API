const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password) ? data.password2 : '';

  if (!Validator.isLength(data.name, { min: 6, max: 30 })) {
    errors.name = 'Name must be between 6 and 30 characters';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = 'email field is required';
  }
  if (Validator.isEmail(data.email)) {
    errors.email = 'email is Invalid';
  }
  
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
