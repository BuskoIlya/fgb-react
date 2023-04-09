export class Validations {

  static MIN_LENGTH = 'minLength';
  static REQUIRED = 'required';

  constructor() {}

  setMinLength(value) {
    this[Validations.MIN_LENGTH] = value;
    return this;
  }

  isRequired() {
    this[Validations.REQUIRED] = true;
    return this;
  }
};