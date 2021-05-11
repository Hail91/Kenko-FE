class FormValidator {
  // Form Validitor public methods
  static emailValidation(email) {
    const validationRe =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validationRe.test(email);
  }
  // Password validator
  static passwordValidation(password) {
    const passwordValidationRe =
      /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?])[\w!@#$%^&*?]{8,}$/;
    return passwordValidationRe.test(password);
  }
}

export default FormValidator;
