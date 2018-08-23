const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data) ? data.name : '';

  if (!Validator.isLength(data.name, { min: 6, max: 30 })) {
    errors.name = 'Name must be between 6 and 30 characters';
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
