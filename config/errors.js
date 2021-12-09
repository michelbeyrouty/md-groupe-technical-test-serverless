'use strict';

class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
};

class InvalidInputType extends BaseError {};
class MisingInput extends BaseError {};


module.exports = {
  InvalidInputType,
  MisingInput,
};
