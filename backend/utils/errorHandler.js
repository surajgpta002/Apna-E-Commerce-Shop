//creating Errorhandler by extenting the Error class so every time we will 
//a new instance of errorHandler class by passing the message and status code

class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;
