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
 * Spread
 */
const fn1 = () => 'Fisrt'
const fn2 = () => 'Second'

Promise.all([
 fn1(),
 fn2()
]).spread((one, two) => {
 console.log('List:', one, 'and', two)
});


/**
 * Coroutine
 */

const gen = Promise.coroutine(function* (age) {
    const a = yield Promise.resolve('Silas')
    const b = yield Promise.resolve('Brasil')

    return a + ' ' + b + ' - age: ' + (age ? age : '18')
})

gen().then(fullname => console.log(fullname))
gen(25).then(fullname => console.log(fullname))
