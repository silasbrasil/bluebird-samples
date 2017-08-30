'use strict'
const Promise = require('bluebird')

/**
 * Error Handler
 */

class Exception extends Error {
    constructor ( message ) {
        super( message );
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
    }
}

class HttpException extends Exception {
    constructor ( message ) {
        super( message )
    }
}

Promise.reject(new HttpException('Erro para ser tratado'))
    .catch(HttpException, err => console.log(err))
    .catch(Exception, err => console.log(err))
    .catch(err => console.log(err))


/**
 * Promisefy
 */



 /**
  * Coroutine
  */
