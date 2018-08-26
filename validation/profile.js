// TODO: Get all data from the schema here.

const Validator = require('validator');

const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};
  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.college = !isEmpty(data.college) ? data.college : '';

  if (!Validator.isEmpty(data.handle)) {
    errors.handle = 'handle field is required';
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = 'status is Invalid';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'status is Required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
