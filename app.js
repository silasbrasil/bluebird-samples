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

// Promise.reject(new HttpException('Erro para ser tratado'))
//     .catch(HttpException, err => console.log(err))
//     .catch(Exception, err => console.log(err))
//     .catch(err => console.log(err))


/**
 * Promisefy
 */
const cbFromHell = (anyString, callback, errorback) => {
    if ( typeof anyString === 'string' )
        callback( anyString + ' - callback sucess' )
    else
        errorback( 'Errorback on ar - :(' )
}

cbFromHell('My big TEXT', res => console.log(res), err => console.log(err))
// result: My big TEXT - callback sucess
cbFromHell(2, res => console.log(res), err => console.log(err))
// result: 'Errorback on ar - :('

// Now start the MAGIC

// Ainda ão sei fazer direito

 /**
  * Coroutine
  */
